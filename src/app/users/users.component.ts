import { Component, OnInit } from '@angular/core';

import {GetsService} from '../gets.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  loadData: any = []
  users = 'users'

  constructor(private gets: GetsService) { }

  ngOnInit(): void {
    this.load()
  }

  load() {
    this.gets.fetchData(this.users).subscribe(data => {
      this.loadData = data.users
        console.log(this.loadData);
    })
  }
}
