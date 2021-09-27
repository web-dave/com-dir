import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ws-app-6846549876lklkhlh';
  user = {};
  name = 'Hhjkhkjh';
  greet = `Hallo ${this.name}`;
  constructor(private router: Router) {
    // router.events.subscribe((data) => console.log(data));
  }
}
