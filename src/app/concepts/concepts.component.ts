import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // string interpolation related
  appName = 'Phone Book App!';

  // property binding related
  companyName = 'TCS';

  constructor() { }

  ngOnInit(): void {
  }

}
