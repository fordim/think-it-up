import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CATEGORIES} from "../constants/categories-en-const";
import {LETTERS} from "../constants/letters-en-const";
import {PlayerService} from "./player.service";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public categoryCards$ = new BehaviorSubject<any[]>([]);
  public letterCards$ = new BehaviorSubject<any[]>([]);
  public openSpecialCategory$ = new BehaviorSubject({text: '', stars: 0});
  public openCategory$ = new BehaviorSubject({text: '', stars: 0});
  public openLetter$ = new BehaviorSubject<string>('');

  constructor(private _player: PlayerService) {
    this.categoryCards$.next(CATEGORIES);
    this.letterCards$.next(LETTERS)
  }

  public openCategoryCards(): void {
    //TODO check logic
    if (this.openCategory$.value.text !== '' || this.openSpecialCategory$.value.text !== '') {
      return;
    }

    console.log('here');
    const categoryCards = this.categoryCards$.value;
    const newCard = categoryCards.pop();

    this.openCategory$.next(newCard);
  }

  public openLetterCards(): void {
    if (this.openCategory$.value.text === '' || this.openLetter$.value !== '') {
      return;
    }

    const letterCards = this.letterCards$.value;
    this.openLetter$.next(letterCards.pop());
  }

  public clearCards(): void {
    this.openSpecialCategory$.next({text: '', stars: 0});
    this.openCategory$.next({text: '', stars: 0});
    this.openLetter$.next('');
  }

  public addScore(playerIndex: number): void {
    if (this.openLetter$.value === '') {
      return;
    }

    const stars = this.openCategory$.value.stars;
    this._player.addScore(playerIndex, stars);
  }
}
