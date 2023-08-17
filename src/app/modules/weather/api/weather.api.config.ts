import { environment } from '../../../../environments/environment';

export abstract class WeatherApiConfig {
	public static API_KEY = environment.apiKey;
	public static BASE_URL = 'https://api.openweathermap.org';

	/** GET */
	public static readonly CURRENT_WEATHER = `${WeatherApiConfig.BASE_URL}/data/2.5/weather`;

	/** GET */
	public static readonly GEO_DATA = `${WeatherApiConfig.BASE_URL}/geo/1.0/direct`;

	/** GET */
	public static readonly FORECAST = `${WeatherApiConfig.BASE_URL}/data/2.5/forecast`;
}
