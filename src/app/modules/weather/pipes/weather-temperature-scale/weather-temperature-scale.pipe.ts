import { Pipe, PipeTransform } from '@angular/core';
import { WeatherUnitsFormat } from '../../enums/weather-units-format.enum';
import { WeatherTemperatureScale } from '../../enums/weather-temperature-scale.enum';

@Pipe({
	name: 'weatherTemperatureScale',
	standalone: true,
	pure: true,
})
export class WeatherTemperatureScalePipe implements PipeTransform {
	public transform(unitsFormat: WeatherUnitsFormat): WeatherTemperatureScale {
		return WeatherTemperatureScalePipe.transform(unitsFormat);
	}

	public static transform(unitsFormat: WeatherUnitsFormat): WeatherTemperatureScale {
		if (unitsFormat === WeatherUnitsFormat.Celsius) {
			return WeatherTemperatureScale.Celsius;
		}

		if (unitsFormat === WeatherUnitsFormat.Fahrenheit) {
			return WeatherTemperatureScale.Fahrenheit;
		}

		return WeatherTemperatureScale.Kelvin;
	}
}
