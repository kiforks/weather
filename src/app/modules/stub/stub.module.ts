import { NgModule } from '@angular/core';

/** Components */
import { StubComponent } from './components/stub/stub.component';

// slots
import { stubSlots } from './stub';

const components = [StubComponent];

@NgModule({
	imports: [components, stubSlots],
	exports: [components, stubSlots],
})
export class StubModule {}
