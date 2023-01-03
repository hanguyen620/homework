import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
import { Subscription } from 'rxjs'

import { ProductsComponent } from '../products.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;
  paramsSubscription!: Subscription
  constructor(private route: ActivatedRoute, private products: ProductsComponent) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.product = this.products.showData(id)
  }
}
