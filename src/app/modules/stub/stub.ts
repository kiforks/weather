import { Directive } from '@angular/core';

/*
 * All these elements are used as slots in StubComponent:
 * @see ./components/stub/stub.components.ts
 * */
@Directive({
	selector: 'stub-title, [stubTitle]',
	standalone: true,
	host: { class: 'stub-title', role: 'heading', 'aria-level': '3' },
})
export class StubTitleDirective {}

@Directive({
	selector: 'stub-description, [stubDescription]',
	standalone: true,
	host: { class: 'stub-description' },
})
export class StubDescriptionDirective {}

export const stubSlots = [StubTitleDirective, StubDescriptionDirective];
