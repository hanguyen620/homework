import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator' 
import { MatTableDataSource } from '@angular/material/table'

import { GetsService } from '../gets.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = 'users'

  constructor(private gets: GetsService) { }

  ngOnInit(): void {
    this.load()
  }

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'phone', 'birthDate'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  load() {
    this.gets.fetchData(this.users).subscribe(data => {     
      this.dataSource = new MatTableDataSource<any>(data.users)
      this.dataSource.paginator = this.paginator
    })
  }

}
