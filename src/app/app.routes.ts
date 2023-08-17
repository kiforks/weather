import { Routes } from '@angular/router';

/** Components */
import { WeatherLayoutComponent } from './modules/weather/components/weather-layout/weather-layout.component';

export const routes: Routes = [
	{
		path: '',
		component: WeatherLayoutComponent,
	},
];
