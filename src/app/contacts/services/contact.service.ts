import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient) { }

  createContact( contactData ){
    console.log(contactData);

    // Method: POST
    return this.http.post(this.REST_API_URL, contactData)
      .pipe(map((res: any) => { // get resp from rest api
        console.log(res);
        return res;
      }));

  }

  getContacts(): Observable<any>{
    return this.http.get(this.REST_API_URL)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  getContact(id){
    console.log(id);
    return this.http.get(this.REST_API_URL +  '/' + id)
      .pipe(map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  updateContact(){

  }

  deleteContact(){

  }
}
