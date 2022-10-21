import { Component, OnInit } from '@angular/core';
import { BoardService } from "../../services/board.service";
import { PlayerService } from "../../services/player.service";
import { GameService } from "../../services/game.service";
import { BehaviorSubject } from "rxjs";
import { Winner } from "../../constants/interface";

@Component({
  selector: 'app-end-game-modal',
  templateUrl: './end-game-modal.component.html',
  styleUrls: ['./end-game-modal.component.scss']
})
export class EndGameModalComponent implements OnInit {

  closeIcon = '/assets/images/popup-close.svg';

  winners$ = new BehaviorSubject<Winner[]>([]);

  constructor(private _board: BoardService, private _player: PlayerService, private  _game: GameService) { }

  ngOnInit(): void {
    this.winners$.next(this._player.getWinners());
  }

  closeModal(): void {
    this._board.closeEndGameModal();
  }

  actionModal(): void {
    this._player.resetScore();
    this._game.newGame();
    this._board.closeEndGameModal();
  }
}
