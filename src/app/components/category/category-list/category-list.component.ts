import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { ValidationService } from '../../../services/validation.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  arrCategories: any;
  constructor(private categoryService: CategoryService, 
    private validationService: ValidationService) { }

  ngOnInit() {
    this.getCategories();
  }

  async getCategories(){
    let data = await this.categoryService.getCategories();
    console.log(data);
    if(this.validationService.checkNotEmpty(data)) this.arrCategories = Object.values(data);
  }

}
