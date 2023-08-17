import { Directive, inject, WritableSignal } from '@angular/core';
import { FormControl } from '@angular/forms';

/** RxJS */
import { BehaviorSubject, catchError, debounceTime, EMPTY, filter, merge, Observable, skip, switchMap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/** Interfaces */
import { WeatherResponse } from '../../interfaces/weather-response.interface';
import { WeatherHttpParams, WeatherSearch } from '../../interfaces/weather.interface';

/** Validators */
import { WeatherValidators } from '../../validators';

/** Enums */
import { WeatherUnitsFormat } from '../../enums/weather-units-format.enum';
import { HttpResponseStatus } from '../../../../core/enums/http-response-status.enum';
import { WeatherType } from '../../enums/weather-type.enum';

/** Services */
import { WeatherApi } from '../../api/weather-api.service';

/** Tokens */
import { WEATHER_SEARCH, WEATHER_VIEW } from '../../tokens/weather.token';

/** Pipes */
import { WeatherTemperatureScalePipe } from '../../pipes/weather-temperature-scale/weather-temperature-scale.pipe';

@Directive({
	selector: 'weather-search, [weatherSearch]',
	standalone: true,
	providers: [{ provide: WEATHER_SEARCH, useExisting: WeatherSearchDirective }],
})
export class WeatherSearchDirective implements WeatherSearch {
	public unitsFormat$ = new BehaviorSubject<WeatherUnitsFormat>(WeatherUnitsFormat.Celsius);

	private weatherType = WeatherType.Current;

	private readonly cityControl = new FormControl('', {
		validators: [WeatherValidators.startsWithSpace],
		nonNullable: true,
	});

	private readonly view = inject(WEATHER_VIEW, { self: true });

	constructor(private readonly weatherApi: WeatherApi) {
		this.initialize();
	}

	private get isLoading(): WritableSignal<boolean> {
		return this.view.isLoading;
	}

	private get weather(): WritableSignal<WeatherResponse | null> {
		return this.view.weather;
	}

	private get weatherData$(): Observable<WeatherResponse> {
		const units = this.unitsFormat$.value;
		const params: WeatherHttpParams = { units, q: this.cityControl.value };

		if (this.weatherType === WeatherType.Current) {
			return this.weatherApi.getCurrentWeather(params);
		}

		return this.weatherApi
			.getGeoCoordinates({ ...params, limit: 5 })
			.pipe(
				switchMap(geoData => this.weatherApi.getForecast({ units, lat: geoData[0].lat, lon: geoData[0].lon }))
			);
	}

	private initialize(): void {
		this.view.cityControl = this.cityControl;
		this.weatherType = this.view.weatherType || this.weatherType;

		const cityChanges$ = this.cityControl.valueChanges.pipe(
			filter(city => this.isValidCity(city, this.cityControl.valid)),
			debounceTime(500)
		);
		const changes$ = merge(cityChanges$, this.unitsFormat$);

		changes$
			.pipe(
				skip(1),
				switchMap(() => this.getData()),
				takeUntilDestroyed()
			)
			.subscribe(weatherData => this.updateView(false, weatherData));
	}

	private getData(): Observable<WeatherResponse> {
		this.isLoading.update(() => true);

		return this.weatherData$.pipe(
			catchError(({ error }) => {
				if (error?.cod === HttpResponseStatus.NotFound) {
					this.weather.update(() => null);
				}

				this.isLoading.update(() => false);

				return EMPTY;
			})
		);
	}

	private updateView(isLoading: boolean, weather: WeatherResponse | null): void {
		this.view.weatherTemperatureScale = WeatherTemperatureScalePipe.transform(this.unitsFormat$.value);

		this.weather.update(() => weather);
		this.isLoading.update(() => isLoading);
	}

	private isValidCity(cityValue: string, isValidControl: boolean): boolean {
		const isValid = !!cityValue.trim() && isValidControl;

		if (!isValid) this.updateView(false, null);

		return isValid;
	}
}
