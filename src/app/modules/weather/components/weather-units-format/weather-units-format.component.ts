import { ChangeDetectionStrategy, Component, EventEmitter, Output, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/** Materials */
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

/** Enums */
import { WeatherUnitsFormat } from '../../enums/weather-units-format.enum';

/** Modules */
import { PanelModule } from '../../../panel/panel.module';

@Component({
	selector: 'weather-units-format',
	standalone: true,
	imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule, PanelModule, MatIconModule],
	templateUrl: './weather-units-format.component.html',
	styleUrls: ['./weather-units-format.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherUnitsFormatComponent {
	@Output() public readonly unitsFormatChange = new EventEmitter<WeatherUnitsFormat>();

	public unitsFormatControl = new FormControl(WeatherUnitsFormat.Celsius, { nonNullable: true });

	public readonly WeatherTemperatureFormat = WeatherUnitsFormat;

	public readonly unitsFormat = signal(this.unitsFormatControl.value);

	constructor() {
		this.unitsFormatControl.valueChanges
			.pipe(takeUntilDestroyed())
			.subscribe(unitsFormat => this.unitsFormatChange.emit(unitsFormat));
	}
}
