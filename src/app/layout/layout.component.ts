import { Component, OnInit } from '@angular/core';
import {BoardService} from "../services/board.service";
import {PlayerService} from "../services/player.service";
import {GameService} from "../services/game.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isDeleteForm$ = this._player.isDeleteForm;

  constructor(private _board: BoardService, private _player: PlayerService, private  _game: GameService) { }

  ngOnInit(): void {
  }

  public newGame(): void {
    this._board.openNewGameModal();
  }

  public resetGame(): void {
    this._player.resetScore();
    this._game.newGame();
  }

  public addPlayer(): void {
    this._board.openAddPlayerModal();

  }

  public deletePlayer(): void {
    this._player.activateDeleteForm();
  }

  public cancelDeletePlayer(): void {
    this._player.deactivateDeleteForm();
  }

  public finishGame(): void {
  }
}
