import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1: create custom event
  // Step 1.1 create an object for EventEmitter
  @Output() profileLoaded = new EventEmitter(); // Step 1.2 @Output() -- will make profileLoaded as Custom Event

  constructor() {
    console.log('Inside constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit -- before emitting event ');
    // step 2: emitting the custom event
    this.profileLoaded.emit('John');  // sending data to the parent com
  }

}
