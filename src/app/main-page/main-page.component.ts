import { Component } from '@angular/core';
import { BoardService } from "../services/board.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  newGameModal$ = this._board.newGameModal$;
  addPlayerModal$ = this._board.addPlayerModal$;
  hasGeneralModal$ = this._board.hasGeneralModal$;
  endGameModal$ = this._board.endGameModal$;
  bigCardModal$ = this._board.bigCardModal$;

  constructor(private _board: BoardService) { }
}
