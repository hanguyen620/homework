import { Component, OnInit } from '@angular/core';
import {GetsService} from '../gets.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  loadData: any = []
  posts = 'posts'

  constructor(private gets: GetsService) { }

  ngOnInit(): void {
    this.load()
  }

  load() {
    this.gets.fetchData(this.posts).subscribe(data => {
      this.loadData = data.posts
        console.log(this.loadData);
    })
  }
}
