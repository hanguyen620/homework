import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { Observable } from 'rxjs'

import {GetsService} from '../gets.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = 'products'
  @ViewChild(MatPaginator) paginator!: MatPaginator;
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
      console.log(this.dataSource)
    })
  }
}
