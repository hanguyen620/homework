import { Component, OnInit } from '@angular/core';
import { GetsService } from '../gets.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  loadData: any = []
  loadProd: any = []
  carts = 'carts'

  constructor(private gets: GetsService) { }

  ngOnInit(): void {
    this.load()
  }

  load() {
    this.gets.fetchData(this.carts).subscribe(data => {
      this.loadData = data.carts
      this.loadProd = data.carts.products
        console.log(this.loadProd);
    })
  }
}
