import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormControl } from '@angular/forms';

/** Material */
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

/** Components */
import { WeatherSearchInputComponent } from '../weather-input/weather-search-input.component';

/** Interfaces */
import { WeatherData } from '../../interfaces/weather-response.interface';
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

@Component({
	selector: 'weather-current',
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
	templateUrl: './weather-current.component.html',
	styleUrls: ['./weather-current.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{ provide: WEATHER_VIEW, useExisting: WeatherCurrentComponent }],
	hostDirectives: [WeatherSearchDirective],
})
export class WeatherCurrentComponent implements WeatherView {
	public isLoading = signal<boolean>(false);
	public weather = signal<WeatherData | null>(null);

	public cityControl!: FormControl<string>;
	public weatherTemperatureScale!: WeatherTemperatureScale;
}
