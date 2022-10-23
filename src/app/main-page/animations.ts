import { animate, style, transition, trigger } from '@angular/animations';

const ANIMATION_DURATION = '350ms cubic-bezier(.8, -0.6, 0.2, 1.5)';

export const FADE_IN_BIG_CARD_ANIMATION = trigger('fadeInBigCard', [
  transition(':enter', [
    style({ opacity: '0', transform: 'scale(0)' }),
    animate(ANIMATION_DURATION, style({ opacity: '1', transform: 'scale(1.5)' })),
    animate('100ms', style({ opacity: '1', transform: 'scale(1)' })),
  ]),
]);

export const FADE_IN_MODAL_ANIMATION = trigger('fadeInModal', [
  transition(':enter', [
    style({ opacity: '0', transform: 'scale(0)' }),
    animate(ANIMATION_DURATION, style({ opacity: '1', transform: 'scale(1)' })),
    // animate('100ms', style({ opacity: '1', transform: 'scale(1)' })),
  ]),
]);
