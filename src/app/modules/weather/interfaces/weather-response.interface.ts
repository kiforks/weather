export type WeatherResponse = WeatherData | WeatherForecastData;

export interface WeatherData {
	base: string;
	clouds: WeatherCloud;
	cod: number;
	coord: WeatherCoordinate;
	dt: number;
	id: number;
	main: WeatherInfo;
	name: string;
	sys: WeatherSystem;
	timezone: number;
	visibility: number;
	weather: Weather[];
	wind: WeatherWind;
}

export interface Weather {
	description: string;
	icon: string;
	id: number;
	main: string;
}

export interface WeatherCoordinate {
	lat: number;
	lon: number;
}

export interface WeatherInfo {
	feels_like: number;
	grnd_level: number;
	humidity: number;
	pressure: number;
	sea_level: number;
	temp: number;
	temp_max: number;
	temp_min: number;
}

export interface WeatherWind {
	deg: number;
	gust: number;
	speed: number;
}

export interface WeatherCloud {
	all: number;
}

export interface WeatherSystem {
	country: string;
	id: number;
	sunrise: number;
	sunset: number;
	type: number;
}

export interface WeatherGeoData {
	lat: number; // latitude
	local_names: Array<Record<string, string>>;
	lon: number; // longitude
	name: string;
	state?: string;
}

export interface WeatherForecastData {
	city: WeatherCity;
	cnt: number;
	cod: string;
	list: WeatherForecast[];
	message: number;
}

export interface WeatherForecast {
	clouds: WeatherCloud;
	dt: number;
	dt_txt: Date;
	main: WeatherInfo;
	pop: number;
	sys: WeatherForecastSys;
	visibility: number;
	weather: Weather[];
	wind: WeatherWind;
}

export interface WeatherForecastSys {
	pod: string;
}

export interface WeatherCity {
	coord: WeatherCoordinate;
	country: string;
	id: number;
	name: string;
	population: number;
	sunrise: number;
	sunset: number;
	timezone: number;
}
