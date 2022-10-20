import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  newGameModal$ = new BehaviorSubject<boolean>(false);
  addPlayerModal$ = new BehaviorSubject<boolean>(false);

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
}
