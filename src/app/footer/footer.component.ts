import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer', // mandatory
  template: `
    <div class="text-center">
      <hr>
      <app-menu></app-menu>
      <p class="redText">Copyright {{year}}</p>
    </div>
  `,
  styles: [
    `
      .redText{
        background-color: yellow;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  year = 2020;

  constructor() { }

  ngOnInit(): void {
  }

}
