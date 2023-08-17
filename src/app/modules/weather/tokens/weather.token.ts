import { InjectionToken } from '@angular/core';

/** Interfaces */
import { WeatherSearch, WeatherView } from '../interfaces/weather.interface';

export const WEATHER_VIEW = new InjectionToken<WeatherView>('WEATHER_VIEW');
export const WEATHER_SEARCH = new InjectionToken<WeatherSearch>('WEATHER_SEARCH');
