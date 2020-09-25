import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styles: [
  ]
})
export class WeatherComponent implements OnInit {


  weatherData: any;

  // 1. send the req to the service
    // 1.1 connect to the service using dep injection
  constructor( private weatherService: WeatherService ) { // dep injection
    console.log('Inside constructor of WeatherComponent');
  }

  ngOnInit(): void { // lifecycle hook -- loaded after constructor -- when the comp comes into view
    console.log('Inside ngOnInit of WeatherComponent');
    // ideal place for you to send ajax calls

    // 1.2 then send the req to service
    this.weatherService.getWeatherUpdates()
      .subscribe((res: any) => {
        console.log(res);
        this.weatherData = res;
      });

    // work on unsubscribe later
  }

}
