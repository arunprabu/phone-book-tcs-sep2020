import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // exposed in an element selector -- mandatory
  templateUrl: './app.component.html', // html -- template should be only one -- mandatory
  styleUrls: ['./app.component.css'] // css -- can be multiple -- optional
})
export class AppComponent {
  // ts
  title = 'phone-book-tcs-sep2020';
}
