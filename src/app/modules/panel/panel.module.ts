import { NgModule } from '@angular/core';

/** Components */
import { PanelComponent } from './components/panel/panel.component';

// slots
import { panelSlots } from './panel';

const components = [PanelComponent];

@NgModule({
	imports: [components, panelSlots],
	exports: [components, panelSlots],
})
export class PanelModule {}
