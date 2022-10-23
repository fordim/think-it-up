import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { ACCEPT, FINISH_GAME, ModalType, RESET_GAME } from "../constants/consts";
import { GeneralModal } from "../constants/interface";

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  newGameModal$ = new BehaviorSubject<boolean>(false);
  endGameModal$ = new BehaviorSubject<boolean>(false);
  addPlayerModal$ = new BehaviorSubject<boolean>(false);
  hasGeneralModal$ = new BehaviorSubject<boolean>(false);
  bigCardModal$ = new BehaviorSubject<boolean>(false);
  generalModal$ = new BehaviorSubject<GeneralModal>({
    text: RESET_GAME,
    type: ModalType.resetGame,
    button: ACCEPT
  });

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
    if (type === ModalType.resetGame) {
      this.generalModal$.next( { text: RESET_GAME, type: ModalType.resetGame, button: ACCEPT } );
      this.hasGeneralModal$.next(true);
    }

    if (type === ModalType.finishGame) {
      this.generalModal$.next( { text: FINISH_GAME, type: ModalType.finishGame, button: ACCEPT } );
      this.hasGeneralModal$.next(true);
    }
  }

  public closeGeneralModal(): void {
    this.hasGeneralModal$.next(false);
  }

  public openEndGameModal(): void {
    this.endGameModal$.next(true);
  }

  public closeEndGameModal(): void {
    this.endGameModal$.next(false);
  }

  public openBigCardModal(): void {
    this.bigCardModal$.next(true);
  }

  public closeBigCardModal(): void {
    this.bigCardModal$.next(false);
  }
}
