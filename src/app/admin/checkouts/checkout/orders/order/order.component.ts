import { Component, Input, OnInit } from '@angular/core';
import { Order } from '@core/interfaces/order.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  @Input() order: Order;

  constructor() {}

  ngOnInit(): void {}
}
