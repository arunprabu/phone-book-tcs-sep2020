import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorator -- @Injectable() makes the class dep injectable
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  REST_API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=Washington&units=metric&appid=92fdf1aa21d318a1610df2a1fff03819';

  constructor( private http: HttpClient ) { }

  getWeatherUpdates() { // 1. get the req from comp
    console.log('Inside getWeatherUpdates of WeatherService');

    // 2. send the req to the rest api
      // 2.1 What's the rest api url? -- this.REST_API_URL
      // 2.2 What's the HTTP Method? -- GET
      // 2.3 What's the tool to send the req to rest api? - HttpClient
    return this.http.get(this.REST_API_URL)
        .pipe( map((res: any) => { // 3. get the res from the rest api
          console.log(res);
          // ideal place for filter, sort, remove, convert
          return res; // 4. send it back to the comp
        }));
  }
}
