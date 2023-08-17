import { NgModule } from '@angular/core';

/** Components */
import { WeatherSearchInputComponent } from './components/weather-input/weather-search-input.component';
import { WeatherLayoutComponent } from './components/weather-layout/weather-layout.component';

const components = [WeatherSearchInputComponent, WeatherLayoutComponent];

@NgModule({
	imports: [components],
	exports: [components],
})
export class WeatherModule {}
