import { ChangeDetectionStrategy, Component, ViewChildren } from '@angular/core';

/** Components */
import { WeatherCurrentComponent } from '../weather-current/weather-current.component';
import { WeatherUnitsFormatComponent } from '../weather-units-format/weather-units-format.component';
import { WeatherForecastComponent } from '../weather-forecast/weather-forecast.component';

/** Enums */
import { WeatherUnitsFormat } from '../../enums/weather-units-format.enum';

/** Tokens */
import { WEATHER_SEARCH } from '../../tokens/weather.token';

/** Interfaces */
import { WeatherSearch } from '../../interfaces/weather.interface';

@Component({
	selector: 'weather-layout',
	standalone: true,
	imports: [WeatherCurrentComponent, WeatherUnitsFormatComponent, WeatherForecastComponent],
	templateUrl: './weather-layout.component.html',
	styleUrls: ['./weather-layout.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherLayoutComponent {
	@ViewChildren(WEATHER_SEARCH) public readonly weatherSearch: WeatherSearch[] = [];

	public onUnitsFormatChange(unitsFormat: WeatherUnitsFormat): void {
		this.weatherSearch.forEach(weatherSearch => {
			weatherSearch.unitsFormat$.next(unitsFormat);
		});
	}
}
