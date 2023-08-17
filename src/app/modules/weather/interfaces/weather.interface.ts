import { WritableSignal } from '@angular/core';
import { FormControl } from '@angular/forms';

/** RxJS */
import { BehaviorSubject } from 'rxjs';

/** Enums */
import { WeatherType } from '../enums/weather-type.enum';
import { WeatherUnitsFormat } from '../enums/weather-units-format.enum';
import { WeatherTemperatureScale } from '../enums/weather-temperature-scale.enum';

/** Interfaces */
import { WeatherResponse } from './weather-response.interface';

export interface WeatherView {
	cityControl: FormControl<string>;
	isLoading: WritableSignal<boolean>;
	weather: WritableSignal<WeatherResponse | null>;
	weatherTemperatureScale: WeatherTemperatureScale;
	weatherType?: WeatherType;
}

export interface WeatherHttpParams {
	lat?: number; // geo latitude
	limit?: number; // number of the locations in the API response (up to 5 results can be returned in the API response)
	lon?: number; // geo longitude
	q?: string; // city name and country code divided by comma (please use ISO 3166 country codes)

	// units of measurement. standard, metric and imperial units are available. If you do not use the units parameter, standard units will be applied by default
	units?: WeatherUnitsFormat;
}

export interface WeatherSearch {
	unitsFormat$: BehaviorSubject<WeatherUnitsFormat>;
}
