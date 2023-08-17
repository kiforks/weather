import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Material */
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
	selector: 'toolbar',
	standalone: true,
	imports: [MatToolbarModule],
	templateUrl: './toolbar.component.html',
	styleUrls: ['./toolbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: { role: 'banner' },
})
export class ToolbarComponent {}
