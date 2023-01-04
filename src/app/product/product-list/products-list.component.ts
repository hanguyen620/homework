import { Component, OnInit, ViewChild, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { Observable } from 'rxjs'

import { GetsService } from '../../gets.service'
import { Product } from '../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products = 'products'
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @Output() newProd = new EventEmitter<Product>();
  obs!: Observable<any>;
  dataSource!: MatTableDataSource<any>;
  
  constructor(private gets: GetsService, private changeDetectorRef: ChangeDetectorRef, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.load()
  }
  
  load() {
    this.gets.fetchData(this.products).subscribe(data => {
      this.dataSource = new MatTableDataSource<any>(data.products);
      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();  
      this.newProd.emit(data.products)
      
    })
  }
  showData(id:number) {
    let product = this.dataSource.filteredData
      .find(prod => prod.id === id)
    console.log(product)
    return product
  }
}
