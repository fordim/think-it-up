import { Component, OnInit } from '@angular/core';
import {GameService} from "../../services/game.service";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  openSpecialCategory$ = this._game.openSpecialCategory$;
  openCategory$ = this._game.openCategory$;
  openLetter$ = this._game.openLetter$;

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
