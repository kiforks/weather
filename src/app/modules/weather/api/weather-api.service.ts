import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData, WeatherForecastData, WeatherGeoData } from '../interfaces/weather-response.interface';
import { WeatherApiConfig } from './weather.api.config';
import { WeatherHttpParams } from '../interfaces/weather.interface';

@Injectable({ providedIn: 'root' })
export class WeatherApi {
	constructor(private readonly httpClient: HttpClient) {}

	public getCurrentWeather(params: WeatherHttpParams): Observable<WeatherData> {
		return this.httpClient.get<WeatherData>(WeatherApiConfig.CURRENT_WEATHER, {
			params: { ...params, appid: WeatherApiConfig.API_KEY },
		});
	}

	public getGeoCoordinates(params: WeatherHttpParams): Observable<WeatherGeoData[]> {
		return this.httpClient.get<WeatherGeoData[]>(WeatherApiConfig.GEO_DATA, {
			params: { ...params, appid: WeatherApiConfig.API_KEY },
		});
	}

	public getForecast(params: WeatherHttpParams): Observable<WeatherForecastData> {
		return this.httpClient.get<WeatherForecastData>(WeatherApiConfig.FORECAST, {
			params: { ...params, appid: WeatherApiConfig.API_KEY },
		});
	}
}
