import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator'
import { Observable } from 'rxjs'

import {GetsService} from '../gets.service'

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
  loadData = []
  carts = 'carts'
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  obs!: Observable<any>;
  dataSource!: MatTableDataSource<any>;
  
  constructor(private gets: GetsService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.load()
  }

  load() {
    this.gets.fetchData(this.carts).subscribe(data => {
      this.dataSource = new MatTableDataSource<any>(data.carts);
      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.obs = this.dataSource.connect();
    })
  }
}
