import { Component, OnInit } from '@angular/core';
import { GetsService } from '../gets.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  loadData: any = []
  comments = 'comments'

  constructor(private gets: GetsService) { }

  ngOnInit(): void {
    this.load()
  }

  load() {
    this.gets.fetchData(this.comments).subscribe(data => {
      this.loadData = data.comments
    })
  }
}
