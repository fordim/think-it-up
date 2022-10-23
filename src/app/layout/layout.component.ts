import { Component } from '@angular/core';
import { BoardService } from "../services/board.service";
import { PlayerService } from "../services/player.service";
import { ModalType } from "../constants/consts";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  isDeleteForm$ = this._player.isDeleteForm$;
  isMinusScoreForm$ = this._player.isMinusScoreForm$;

  constructor(private _board: BoardService, private _player: PlayerService) { }

  public newGame(): void {
    this._board.openNewGameModal();
  }

  public resetGame(): void {
    this._board.openGeneralModal(ModalType.resetGame);
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
    this._board.openGeneralModal(ModalType.finishGame);
  }

  public minusScore(): void {
    this._player.activateMinusScoreForm();
  }

  public cancelMinusScore(): void {
    this._player.deactivateMinusScoreForm();
  }
}
