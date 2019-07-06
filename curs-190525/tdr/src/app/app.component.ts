import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdr';
  index = 0;

  ngOnInit() {
    console.log("init");
    setInterval(this.update.bind(this), 1000);
  }

  update() {
    this.title = "tdr" + this.index;
    this.index++;
  }
}
