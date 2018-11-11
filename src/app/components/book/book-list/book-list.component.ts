import { Component, OnInit  } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { CategoryService } from '../../../services/category.service';
import { AuthorService } from '../../../services/author.service';
import { PublisherService } from '../../../services/publisher.service';
import { ValidationService } from '../../../services/validation.service';
import { AlertService } from '../../../services/alert.service';
import { FilterService } from '../../../services/filter.service';
import { environment } from 'src/environments/environment.prod';

declare const $: any;

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  arrBooks = [];
  arrFilteredBooks = [];
  arrCategories = [];
  arrPublishers = [];
  arrAuthors = [];
  currentBook = {};
  currentPage: number = 1;
  arrPriceRanges = [];
  filterObj: any;
  appDomain: string;

  constructor(private bookService: BookService, 
    private categoryService: CategoryService, 
    private authorService: AuthorService, 
    private publisherService: PublisherService,
    private validationService: ValidationService, 
    private alertService: AlertService, 
    private filterService: FilterService) {

      this.filterObj = { cateID: '0', authorID: '0', 
      publisherID: '0', bookName: '', 
      quantityFrom: '', quantityTo: '', 
      priceFrom: '', priceTo: ''
    }
    this.appDomain = environment.appDomain;
  }

  ngOnInit() {
    this.getBooks();
    this.getAuthors();
    this.getCategories();
    this.getPublishers();
  }

  async getBooks(){
    let data = await this.bookService.getBookList();
    console.log(data);
    if(this.validationService.checkNotEmpty(data)) this.arrBooks = Object.values(data).map(book => {
      book.AuthorIDs = Array.from(book.AuthorIDs);
      book.Image = `${this.appDomain}/api/books/Image?imageName=${book.Image}`;
      return book;
    });
    this.arrFilteredBooks = this.arrBooks.slice();
  }

  filterBooks(){
    let { arrBooks } = this;
    let { cateID, authorID, publisherID, bookName, quantityFrom, quantityTo, priceTo, priceFrom } = this.filterObj;
    let arr1 = this.filterService.filterByID(arrBooks, 'CategoryID', cateID);
    let arr2 = this.filterService.filterByID(arr1, 'AuthorIDs', authorID);
    let arr3 = this.filterService.filterByID(arr2, 'PulisherID', publisherID);
    let arr4 = this.filterService.filterByName(arr3, 'Name', bookName);
    let arr5 = this.filterService.filterByRangeNumber(arr4, 'Quantity', quantityFrom, quantityTo);
    this.arrFilteredBooks = this.filterService.filterByRangeNumber(arr5, 'Price', priceFrom, priceTo);
  }

  async getCategories(){
    let data = await this.categoryService.getCategories();
    if(this.validationService.checkNotEmpty(data)) this.arrCategories = Object.values(data);
  }

  async getAuthors(){
    let data = await this.authorService.getAuthors();
    if(this.validationService.checkNotEmpty(data)) this.arrAuthors = Object.values(data);
  }

  async getPublishers(){
    let data = await this.publisherService.getPublishers();
    console.log(data);
    if(this.validationService.checkNotEmpty(data)) this.arrPublishers = Object.values(data);
  }

  showDetails(book){
    this.currentBook = Object.assign({}, book);
    $('#modalBookDetail').modal('show');
  }

  showModalAddBook(){
    this.currentBook = {};
    $('#modalAddBook').modal('show');
  }

  async confirmRemove(book){
    let sure = await this.alertService.showAlertWarning('Ban co chac khong?', '', null);
    if(sure) {
      let res = await this.bookService.removeBook(book.ID);
      console.log(res);
    }
  }

  showEditForm(book){
    this.currentBook = Object.assign({}, book);
    $('#modalUpdateBook').modal('show');
  }

  async updateBook(){
    let res = await this.bookService.updateBook(this.currentBook);
    console.log(res);
    if(this.validationService.checkNotEmpty(res)){
      $('#modalUpdateBook').modal('hide');
      this.getBooks();
      this.alertService.showAlertSuccess(res, '', 5000);
    }else{
      this.alertService.showAlertError('Cap nhat khong thanh cong', '', 5000);
    }
  }

  async addBook(){
    let res = await this.bookService.addBook(this.currentBook);
    console.log(res);
  }


}
