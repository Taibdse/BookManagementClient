import { VNAccents } from '../Utilites/Vn-Accents';
import { ValidationService } from '../services/validation.service';

export class Filter {
    constructor(private vnAccents: VNAccents, 
        private validationService: ValidationService){}

    filterByName(arr, prop, value){
        if(!this.validationService.checkNotEmpty(value)) return arr;
        return arr.filter(item => {
            let el = this.vnAccents.removeAccents(item[prop]).toLowerCase();
            value = this.vnAccents.removeAccents(value).toLowerCase();
            return el.indexOf(value) > -1;
        })
    }

    filterByID(arr, prop, value){
        if(!this.validationService.checkNotEmpty(value)) return arr;
        return arr.filter(item => item[prop] == value || item[prop].indexOf(value) > -1);
    }

    filterByRangeNumber(arr, prop, from, to){
        let cond = this.validationService.checkPositiveNum(from, false) || this.validationService.checkPositiveNum(to, false);
        if(cond) return arr;
        from = Number(from);
        to = Number(to);
        if(from > to) return arr;
        return arr.filter(item => item[prop] >= from && item[prop] <= to);
    }
}