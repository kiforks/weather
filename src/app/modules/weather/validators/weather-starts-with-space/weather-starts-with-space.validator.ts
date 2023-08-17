import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const weatherCityStartsWithSpace: ValidatorFn = ({ value }: AbstractControl): ValidationErrors | null => {
	const startsWithSpace = value.startsWith(' ');

	return startsWithSpace ? { invalidCity: { startsWithSpace } } : null;
};
