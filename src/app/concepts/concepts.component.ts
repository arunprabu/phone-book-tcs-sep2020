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
  isLoggedIn = false;

  // two way binding -- related
  courseName = 'Angular';

  constructor() { }

  ngOnInit(): void {
  }

  clickMeHandler(event): void{
    alert('clicked');
    console.log(event);
    // todo: disabling the button on click in js
    // todo: change the button label from 'Click Me' to 'Clicked'
  }

  profileLoadedHandler(event){
    console.log('Inside profileLoadedHandler -- after event emitted with data');
    console.log(event);
  }
}
