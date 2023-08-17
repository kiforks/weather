import { NgModule } from '@angular/core';

/** Components */
import { CardComponent } from './components/card/card.component';

// slots
import { cardSlots } from './card';

const components = [CardComponent];

@NgModule({
	imports: [components, cardSlots],
	exports: [components, cardSlots],
})
export class CardModule {}
