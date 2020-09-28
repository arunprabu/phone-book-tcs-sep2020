import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styles: [
  ]
})
export class WeatherComponent implements OnInit, OnDestroy {

  weatherData: any;
  weatherSubscription: Subscription;

  // 1. send the req to the service
    // 1.1 connect to the service using dep injection
  constructor( private weatherService: WeatherService ) { // dep injection
    console.log('Inside constructor of WeatherComponent');
  }

  ngOnInit(): void { // lifecycle hook -- loaded after constructor -- when the comp comes into view
    console.log('Inside ngOnInit of WeatherComponent');
    // ideal place for you to send ajax calls

    // 1.2 then send the req to service
    this.weatherSubscription = this.weatherService.getWeatherUpdates()
      .subscribe((res: any) => {
        console.log(res);
        this.weatherData = res;
      });
  }

  ngOnDestroy(){
    // when the comp goes out of the view
    console.log('Inside ngOnDestroy');
    // ideal place for unsubscription, clear the object, empty array, clear intervals
    this.weatherSubscription.unsubscribe();
  }
}
