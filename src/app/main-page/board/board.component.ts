import { Component, OnInit } from '@angular/core';
import {GameService} from "../../services/game.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  openCategory$ = this._game.openCategory$;
  openLetter$ = this._game.openLetter$;
  categoryCardsCount$ = this._game.categoryCardsCount$;

  questionIcon = '/assets/images/question-mark.svg';
  lettersIcon = '/assets/images/abc-letters.svg';

  constructor(private _game: GameService) { }

  ngOnInit(): void {
  }

  public openCategoryCard(): void {
    this._game.openCategoryCards();
  }

  public openLetterCard(): void {
    this._game.openLetterCards();
  }
}
