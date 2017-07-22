import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }

  getWeather(city: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city} &APPID=abaacddc8971f4d8d9ef34f19816955d`)
    .map( data => data.json() )
    .toPromise();
  }

}
