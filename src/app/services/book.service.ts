import { Injectable } from '@angular/core';
import { RequestOptions, RequestMethod, Headers, Response } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  appDomain: string;
  bookApiUrl: string;
  
  constructor(private httpClient: HttpClient) { 
    this.appDomain = environment.appDomain;
    this.bookApiUrl = `${this.appDomain}/api/books`;
  }

  async getBookList(){
    let url = `${this.bookApiUrl}/GetAll`;
    let res = await this.httpClient.get(url).toPromise();
    return res;
  }

  async removeBook(ID){
    let url = `${this.bookApiUrl}/RemoveBook/${ID}`;
    try {
      let res = await this.httpClient.delete(url).toPromise();
      return res;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  updateBook(book){
    let url = `${this.bookApiUrl}/UpdateBook`;
    try {
      let res = this.httpClient.put(url, book).toPromise();
      return res;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  addBook(book){
    let url = `${this.bookApiUrl}/AddBook`;
    try {
      let res = this.httpClient.post(url, book).toPromise();
      return res;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

}
