import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  goToContactsHandler(){
    // work on routing thru program
    this.router.navigate(['contacts']);
  }

}
