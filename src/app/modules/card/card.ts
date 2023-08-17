import { Directive } from '@angular/core';

/*
 * All these elements are used as slots in CardComponent:
 * @see ./components/card/card.component.ts
 * */
@Directive({
	selector: 'card-additional-info, [cardAdditionalInfo]',
	standalone: true,
	host: { class: 'card-additional-info' },
})
export class CardAdditionalInfoDirective {}

@Directive({
	selector: 'card-title, [cardTitle]',
	standalone: true,
	host: { class: 'card-title', role: 'heading', 'aria-level': '3' },
})
export class CardTitleDirective {}

@Directive({
	selector: 'card-description, [cardDescription]',
	standalone: true,
	host: { class: 'card-description' },
})
export class CardDescriptionDirective {}

@Directive({
	selector: 'card-text, [cardText]',
	standalone: true,
	host: { class: 'card-text' },
})
export class CardTextDirective {}

@Directive({
	selector: 'card-section, [cardSection]',
	standalone: true,
	host: { class: 'card-section' },
})
export class CardSectionDirective {}

@Directive({
	selector: 'card-image, [cardImage]',
	standalone: true,
	host: { class: 'card-image' },
})
export class CardImageDirective {}

export const cardSlots = [
	CardTitleDirective,
	CardDescriptionDirective,
	CardTextDirective,
	CardSectionDirective,
	CardImageDirective,
	CardAdditionalInfoDirective,
];
