import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent implements OnInit {

  contactData: any;
  duplicateContactData: any;

  isUpdated: boolean;

  constructor( private contactService: ContactService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // send ajax

    // read url param in angular
    const CONTACT_ID = this.activatedRoute.snapshot.paramMap.get('contactId');

    this.contactService.getContact(CONTACT_ID)
      .subscribe( (res: any) => {
        console.log(res);
        this.contactData = res;
      });
  }

  updateHandler(formData){
    console.log(formData); // state of the Contact Form
    console.log(formData.value);

    // send the data to the service layer
    this.isUpdated = true;
  }

  editModalOpen() {
    this.isUpdated = true;
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
  }
}
