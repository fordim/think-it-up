import { from, Observable, tap } from 'rxjs';

declare let confetti: ConfettiFunc;

const random = (min: number, max: number): number => Math.random() * (max - min) + min;

export const DEFAULT_CONFETTI_SETTINGS: ConfettiParam = {
  angle: random(90, 90),
  spread: random(120, 100),
  particleCount: random(150, 150),
  origin: {
    y: 0.6,
  },
  zIndex: 100000,
};

interface ConfettiParam {
  angle: number;
  spread: number;
  particleCount: number;
  origin: {
    y: number;
    x?: number;
  };
  zIndex: number;
}

export type ConfettiFunc = (param: ConfettiParam) => void;

const CONFETTI_SCRIPT_URL = `https://cdn.skyeng.ru/resources/js/em/confetti/confetti.browser.min.js`;

export function playConfetti(param: ConfettiParam = DEFAULT_CONFETTI_SETTINGS): Observable<void> {
  return from(injectScript(CONFETTI_SCRIPT_URL)).pipe(tap(() => confetti(param)));
}

export const injectScript = (src: string): Promise<void> => {
  return new Promise<void>(resolve => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;

    script.onload = () => {
      resolve();
    };

    document.body.appendChild(script);
  });
};
