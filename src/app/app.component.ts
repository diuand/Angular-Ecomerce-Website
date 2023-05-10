import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  HeaderHeight : string = ''

  getHedearHeight(height:string){
    this.HeaderHeight = height
    console.log(this.HeaderHeight)
  }
}
