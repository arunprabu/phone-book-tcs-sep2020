import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      name: new FormControl('', Validators.required), // Step 7: work on validation
      phone: new FormControl('', [Validators.required, Validators.minLength(10)]),     // step 8 ref HTML to display validation error
      email: new FormControl('', [Validators.required, Validators.email])
      // Step 3: go to html for step 3
    });
  }

  // step 6 - have the handler
  addContactHandler(){
    console.log(this.contactForm); // the form's entire state
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
