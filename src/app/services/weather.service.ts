import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'http://localhost:3000/weather';

  constructor(private http: HttpClient) { }

  getWeather() {
    return this.http.get<any>(this.apiUrl); 
  }
}
