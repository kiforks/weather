import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'panel',
	standalone: true,
	template: `
		<ng-content select="panel-title, [panelTitle]"></ng-content>
		<ng-content select="panel-body, [panelBody]"></ng-content>
	`,
	styleUrls: ['./panel.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { role: 'section' },
})
export class PanelComponent {}
