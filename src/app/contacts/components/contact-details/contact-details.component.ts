import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent implements OnInit {

  contactData: any;

  constructor( private contactService: ContactService) { }

  ngOnInit(): void {
    // send ajax
    this.contactService.getContact()
      .subscribe( (res: any) => {
        console.log(res);
        this.contactData = res;
      });
  }

  updateHandler(formData){
    console.log(formData);
    console.log(formData.value);
  }
}
