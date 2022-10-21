import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {FINISH_GAME, RESET_GAME} from "../constants/modal";

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  newGameModal$ = new BehaviorSubject<boolean>(false);
  addPlayerModal$ = new BehaviorSubject<boolean>(false);
  generalModal$ = new BehaviorSubject<boolean>(false);
  generalModalText$ = new BehaviorSubject<string>('');
  generalModalType$ = new BehaviorSubject<string>('');

  constructor() { }

  public openNewGameModal(): void {
    this.newGameModal$.next(true);
  }

  public closeNewGameModal(): void {
    this.newGameModal$.next(false);
  }

  public openAddPlayerModal(): void {
    this.addPlayerModal$.next(true);
  }

  public closeAddPlayerModal(): void {
    this.addPlayerModal$.next(false);
  }

  public openGeneralModal(type: string): void {
    if (type === RESET_GAME) {
      this.generalModalText$.next('Сыграть ещё раз?');
      this.generalModalType$.next(type);
      this.generalModal$.next(true);
    }

    if (type === FINISH_GAME) {
      this.generalModalText$.next('Завершить игру?');
      this.generalModalType$.next(type);
      this.generalModal$.next(true);
    }
  }

  public closeGeneralModal(): void {
    this.generalModal$.next(false);
  }
}
