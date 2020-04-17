import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items =["angular 4", "React","underscore" ];
  newitem ="";
  pushitem = function () {
    if(this.newitem !="abc") {
        this.items.push(this.newitem);
        this.newitem ="";
    }
    
  }
}
