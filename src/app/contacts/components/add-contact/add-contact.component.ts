import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  // Step 1: Create form tag equivalent in ts
  contactForm: FormGroup;

  isSaved: boolean;

  constructor( private router: Router, private contactService: ContactService ) { }

  ngOnInit(): void {
    // Step 1 continues...
    this.contactForm = new FormGroup({
      // Step 2: Create form field equivalent in ts
      name: new FormControl(),
      phone: new FormControl(),
      email: new FormControl()
      // Step 3: go to html for step 3
    });
  }

  addContactHandler(){
    console.log(this.contactForm);
    console.log(this.contactForm.value);
    this.contactService.createContact(this.contactForm.value)
      .subscribe( (res: any) => {
        console.log(res);
        this.isSaved = true;
      });
  }

  goToContactsHandler(){
    // work on routing thru program
    this.router.navigate(['contacts']);
  }

}
