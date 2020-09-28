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
  isLoggedIn = true;

  // two way binding -- related
  courseName = 'Angular';

  // *ngFor related
  skillsList: string[] = [ 'html', 'css', 'js', 'nodejs' ];

  // pipes related
  dummyText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
  today = new Date();
  frameworksList: string[] = ['ng', 'react'];

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

  addFrameworkHandler(){
    this.frameworksList.push('VueJS');
    console.log(this.frameworksList);
  }
}
