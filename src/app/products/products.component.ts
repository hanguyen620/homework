import { Component, OnInit } from '@angular/core';
import {GetsService} from '../gets.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  loadData: any = []
  products = 'products'

  constructor(private gets: GetsService) { }

  ngOnInit(): void {
    this.load()
  }

  load() {
    this.gets.fetchData(this.products).subscribe(data => {
      this.loadData = data.products
        console.log(this.loadData);
    })
  }
}
