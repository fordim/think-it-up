import {Component, OnInit} from '@angular/core';
import {BoardService} from "../../services/board.service";
import {PlayerService} from "../../services/player.service";
import {GameService} from "../../services/game.service";

@Component({
  selector: 'app-general-modal',
  templateUrl: './general-modal.component.html',
  styleUrls: ['./general-modal.component.css']
})
export class GeneralModalComponent implements OnInit {
  generalModalText$ = this._board.generalModalText$;
  generalModalType$ = this._board.generalModalType$;

  closeIcon = '/assets/images/popup-close.svg';

  constructor(private _board: BoardService, private _player: PlayerService, private  _game: GameService) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this._board.closeGeneralModal();
  }

  resetGame(): void {
    this._player.resetScore();
    this._game.newGame();
    this._board.closeGeneralModal();
  }

  finishGame(): void {
    this._board.closeGeneralModal();
  }
}
