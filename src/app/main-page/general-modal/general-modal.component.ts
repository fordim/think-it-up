import { Component } from '@angular/core';
import { BoardService } from "../../services/board.service";
import { PlayerService } from "../../services/player.service";
import { GameService } from "../../services/game.service";
import { ModalType } from "../../constants/consts";

@Component({
  selector: 'app-general-modal',
  templateUrl: './general-modal.component.html',
  styleUrls: ['./general-modal.component.scss']
})
export class GeneralModalComponent {
  generalModal$ = this._board.generalModal$;

  closeIcon = '/assets/images/popup-close.svg';

  constructor(private _board: BoardService, private _player: PlayerService, private  _game: GameService) { }

  closeModal(): void {
    this._board.closeGeneralModal();
  }

  actionModal(): void {
    if (this.generalModal$.value.type === ModalType.resetGame) {
      this._player.resetScore();
      this._game.newGame();
      this._board.closeGeneralModal();
    }

    if (this.generalModal$.value.type === ModalType.finishGame) {
      this._board.openEndGameModal();
      this._board.closeGeneralModal();
    }
  }
}
