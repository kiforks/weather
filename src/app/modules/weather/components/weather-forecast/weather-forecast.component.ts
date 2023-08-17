import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormControl } from '@angular/forms';

/** Materials */
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

/** Components */
import { WeatherSearchInputComponent } from '../weather-input/weather-search-input.component';

/** Interfaces */
import { WeatherForecast, WeatherForecastData } from '../../interfaces/weather-response.interface';
import { WeatherView } from '../../interfaces/weather.interface';

/** Modules */
import { StubModule } from '../../../stub/stub.module';
import { PanelModule } from '../../../panel/panel.module';
import { CardModule } from '../../../card/card.module';

/** Components */
import { WeatherUnitsFormatComponent } from '../weather-units-format/weather-units-format.component';

/** Tokens */
import { WEATHER_VIEW } from '../../tokens/weather.token';

/** Directives */
import { WeatherSearchDirective } from '../../directives/weather-search/weather-search.directive';

/** Enums */
import { WeatherTemperatureScale } from '../../enums/weather-temperature-scale.enum';
import { WeatherType } from '../../enums/weather-type.enum';

@Component({
	selector: 'weather-forecast',
	standalone: true,
	imports: [
		WeatherSearchInputComponent,
		CommonModule,
		MatProgressSpinnerModule,
		CardModule,
		StubModule,
		WeatherUnitsFormatComponent,
		WeatherSearchDirective,
		PanelModule,
		MatIconModule,
		NgOptimizedImage,
	],
	templateUrl: './weather-forecast.component.html',
	styleUrls: ['./weather-forecast.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{ provide: WEATHER_VIEW, useExisting: WeatherForecastComponent }],
	hostDirectives: [WeatherSearchDirective],
})
export class WeatherForecastComponent implements WeatherView {
	public isLoading = signal<boolean>(false);
	public weather = signal<WeatherForecastData | null>(null);
	public weatherList = signal<WeatherForecast[]>([]);

	public cityControl!: FormControl<string>;
	public weatherTemperatureScale!: WeatherTemperatureScale;

	public readonly weatherType = WeatherType.Forecast;

	constructor() {
		effect(
			() => {
				const weather = this.weather();

				if (weather) this.updateWeatherList(weather.list);
			},
			{ allowSignalWrites: true }
		);
	}

	private updateWeatherList(weatherList: WeatherForecast[]): void {
		const startIdx = 4;
		const step = 8;
		const numberOfElements = 5;

		const selectedElements = Array.from({ length: numberOfElements }, (_, i) => weatherList[startIdx + i * step]);

		this.weatherList.update(() => selectedElements);
	}
}
