import { Injectable } from '@angular/core';
import { VnAccentsService } from '../services/vn-accents.service';
import { ValidationService } from '../services/validation.service';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private vnAccentsService: VnAccentsService,
    private validationService: ValidationService) { }

  filterByName(arr, prop, value) {
    if (!this.validationService.checkNotEmpty(value)) return arr;
    return arr.filter(item => {
      let el = this.vnAccentsService.removeAccents(item[prop]).toLowerCase();
      value = this.vnAccentsService.removeAccents(value).toLowerCase();
      return el.indexOf(value) > -1;
    })
  }

  filterByID(arr, prop, value) {
    if (!this.validationService.checkNotEmpty(value) || value == '0') return arr;
    return arr.filter(item => {
      if(item[prop].constructor == Array) {
        return Object.values(item[prop]).some(x => x == value);
      }
      return item[prop] == value;
    });
  }

  filterByRangeNumber(arr, prop, from, to) {
    let cond = !this.validationService.checkPositiveNum(from, false) || !this.validationService.checkPositiveNum(to, false);
    if (cond) return arr;
    from = Number(from);
    to = Number(to);
    if (from > to) return arr;
    return arr.filter(item => Number(item[prop]) >= from && Number(item[prop]) <= to);
  }
}
