import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {
  appDomain: string;
  publisherUrl: string;
  constructor(private httpClient: HttpClient) { 
    this.appDomain = environment.appDomain;
    this.publisherUrl = `${this.appDomain}/api/publishers`;
  }

  async getPublishers(){
    let url = `${this.publisherUrl}/GetAll`;
    try {
      let data = await this.httpClient.get(url).toPromise();
      return data;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
}
