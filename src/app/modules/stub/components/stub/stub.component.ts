import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'stub',
	standalone: true,
	template: `
		<ng-content select="stub-title, [stubTitle]"></ng-content>
		<ng-content select="stub-description, [stubDescription]"></ng-content>
	`,
	styleUrls: ['./stub.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { class: 'stub' },
})
export class StubComponent {}
