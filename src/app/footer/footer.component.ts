import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer', // mandatory
  template: `
    <div class="text-center">
      <hr>
      <app-menu></app-menu>
      <p>Copyright {{year}}</p>
    </div>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  year = 2020;

  constructor() { }

  ngOnInit(): void {
  }

}
