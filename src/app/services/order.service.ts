import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  appDomain: string;
  orderApiUrl: string;
  
  constructor(private httpClient: HttpClient) { 
    this.appDomain = environment.appDomain;
    this.orderApiUrl = `${this.appDomain}/api/orders`;
  }

  async getOrderList(){
    let url = `${this.orderApiUrl}/GetAll`;
    let res = await this.httpClient.get(url).toPromise();
    return res;
  }

  async removeOrder(ID){
    let url = `${this.orderApiUrl}/RemoveOrder/${ID}`;
    try {
      let res = await this.httpClient.delete(url).toPromise();
      return res;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  updateOrder(order){
    let url = `${this.orderApiUrl}/UpdateOrder`;
    try {
      let res = this.httpClient.put(url, order).toPromise();
      return res;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  addOrder(order){
    let url = `${this.orderApiUrl}/AddOrder`;
    try {
      let res = this.httpClient.post(url, order).toPromise();
      return res;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

}
