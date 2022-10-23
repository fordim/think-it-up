import { Component } from '@angular/core';
import { BoardService } from "../services/board.service";
import { FADE_IN_BIG_CARD_ANIMATION, FADE_IN_MODAL_ANIMATION } from "./animations";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [FADE_IN_BIG_CARD_ANIMATION, FADE_IN_MODAL_ANIMATION],
})
export class MainPageComponent {
  newGameModal$ = this._board.newGameModal$;
  addPlayerModal$ = this._board.addPlayerModal$;
  hasGeneralModal$ = this._board.hasGeneralModal$;
  endGameModal$ = this._board.endGameModal$;
  bigCardModal$ = this._board.bigCardModal$;

  constructor(private _board: BoardService) { }
}
