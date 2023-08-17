import { Directive } from '@angular/core';

/*
 * All these elements are used as slots in PanelComponent:
 * @see ./components/stub/stub.components.ts
 * */
@Directive({
	selector: 'panel-title, [panelTitle]',
	standalone: true,
	host: { class: 'panel-title', role: 'heading', 'aria-level': '3' },
})
export class PanelTitleDirective {}

@Directive({
	selector: 'panel-body, [panelBody]',
	standalone: true,
	host: { class: 'panel-body' },
})
export class PanelBodyDirective {}

export const panelSlots = [PanelTitleDirective, PanelBodyDirective];
