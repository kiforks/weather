# Angular Weather Application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.5.

## Objective

Develop a simple Angular weather application that lets users search for cities and displays their current weather and a 5-day forecast.

## Features

-   **City Search:** Enter a city to retrieve its current weather.
-   **5-day Forecast:** Access a future forecast for the selected city spanning 5 days.
-   **Responsive Layout:** Designed for both desktop and mobile platforms.

## Setup

1. **Prerequisites:**

    - Ensure [Angular CLI](https://github.com/angular/angular-cli) is installed. If not:
        ```
        npm install -g @angular/cli
        ```

2. **Clone and Navigate:**

```
git clone https://github.com/kiforks/weather
cd your-path-to-project/weather
```

3. **Dependencies:**

```
yarn install
```

4. **API Key Configuration:**

-   Sign up on [OpenWeatherMap](https://home.openweathermap.org/api_keys) to secure your API key.
-   Place the key in src/environments/environment.ts:
    ```typescript
    export const environment = {
    	production: false,
    	apiKey: 'YOUR_API_KEY',
    };
    ```

## Development server

Run `ng serve` for a development server. Go to `http://localhost:4200/`. The application reloads if source files are modified.

## Build

For building the project, use `ng build`. The built artifacts will be located in the `dist/` directory.

## Further assistance

For additional information on Angular CLI, use `ng help` or visit the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
