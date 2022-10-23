import { Component, OnInit } from '@angular/core';
import { BoardService } from "../../services/board.service";
import { PlayerService } from "../../services/player.service";
import { GameService } from "../../services/game.service";
import { BehaviorSubject, delay } from "rxjs";
import { Player } from "../../constants/interface";
import { DEFAULT_CONFETTI_SETTINGS, playConfetti } from "../play-confetti";

@Component({
  selector: 'app-end-game-modal',
  templateUrl: './end-game-modal.component.html',
  styleUrls: ['./end-game-modal.component.scss']
})
export class EndGameModalComponent implements OnInit {

  closeIcon = '/assets/images/popup-close.svg';

  winners$ = new BehaviorSubject<Player[]>([]);

  constructor(private _board: BoardService, private _player: PlayerService, private  _game: GameService) { }

  ngOnInit(): void {
    this.winners$.next(this._player.getWinners());

    playConfetti({
      ...DEFAULT_CONFETTI_SETTINGS,
      origin: {
        y: 0.5,
        x: 0.5,
      },
    })
      .pipe(delay(1000))
      .subscribe(() => {});
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
