import { Component } from '@angular/core';
import { GameService } from "../../services/game.service";
import { BoardService } from "../../services/board.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  openCategory$ = this._game.openCategory$;
  openLetter$ = this._game.openLetter$;
  categoryCardsCount$ = this._game.categoryCardsCount$;

  questionIcon = '/assets/images/question-mark.svg';
  lettersIcon = '/assets/images/abc-letters.svg';

  constructor(private _game: GameService, private _board: BoardService) { }

  public openCategoryCard(): void {
    this._game.openCategoryCards();
  }

  public openLetterCard(): void {
    this._game.openLetterCards();
  }

  public openBigCard(): void {
    this._board.openBigCardModal();
  }
}
