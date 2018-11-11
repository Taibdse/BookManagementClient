import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  appDomain: string;
  apiUrl: string;
  
  constructor(private httpClient: HttpClient) {
    this.appDomain = environment.appDomain;
    this.apiUrl = `${this.appDomain}/api/categories`;
  }

   async getCategories(){
     let url = `${this.apiUrl}/GetAll`;
     try {
      let res = await this.httpClient.get(url).toPromise();
      return res;
     } catch (error) {
       console.log(error.message);
       return null;
     }
   }
}
