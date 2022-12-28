import { Component } from '@angular/core';

import { GetsService } from './gets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private gets: GetsService) { }
  
}
