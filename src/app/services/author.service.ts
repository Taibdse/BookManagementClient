import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  appDomain: string;

  constructor(private httpClient: HttpClient) {
    this.appDomain = environment.appDomain;
  }

  async getAuthors(){
    let url = `${this.appDomain}/api/authors/GetAll`;
    try {
      let res = await this.httpClient.get(url).toPromise();
      return res;
    } catch (error) {
      console.log(error.message);
      return null;
    }
    
  }

}
