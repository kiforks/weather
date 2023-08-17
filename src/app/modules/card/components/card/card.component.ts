import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Materials */
import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'card, [card]',
	standalone: true,
	imports: [MatCardModule],
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}
