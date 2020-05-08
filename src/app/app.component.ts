import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'recipe-book';
  option = 'recipes';

  onLinkClicked(data) {
    console.log("data", data)
    this.option = data.option
    console.log("this.option", this.option)
  }
}
