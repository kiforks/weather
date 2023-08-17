import { ValidatorFn } from '@angular/forms';
import { weatherCityStartsWithSpace } from './weather-starts-with-space/weather-starts-with-space.validator';

export abstract class WeatherValidators {
	public static get startsWithSpace(): ValidatorFn {
		return weatherCityStartsWithSpace;
	}
}
