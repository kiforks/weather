import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

/** Material */
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'weather-search-input',
	standalone: true,
	imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, ReactiveFormsModule],
	templateUrl: './weather-search-input.component.html',
	styleUrls: ['./weather-search-input.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherSearchInputComponent {
	// eslint-disable-next-line @angular-eslint/no-input-rename
	@Input({ required: true }) public control!: FormControl<string>;

	public onClearSearchClick(): void {
		this.control.reset();
	}
}
