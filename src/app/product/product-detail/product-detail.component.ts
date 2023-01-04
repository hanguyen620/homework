import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'

import { ProductsListComponent } from '../product-list/products-list.component';
import { GetsService } from '../../gets.service'
import { Product } from '../product'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: any;
  constructor(private route: ActivatedRoute, private products: ProductsListComponent, private getsService: GetsService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.getsService.fetchData('products/' + id).subscribe(prod => this.product = prod)
  }
  
  load() {
    console.log(this.product)
  }
}
