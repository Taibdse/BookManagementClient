import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  arrOrdersList: any;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
  }

  async getOrders(){
    let res = await this.orderService.getOrderList();
    if(res) this.arrOrdersList = Object.values(res);
  }

}
