import { Component, OnInit } from '@angular/core';
import { GameService } from "../../services/game.service";
import {PlayerService} from "../../services/player.service";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players$ = this._player.players$;
  deleteIcon = '/assets/images/delete-player.svg';
  isDeleteForm$ = this._player.isDeleteForm$;
  isMinusScoreForm$ = this._player.isMinusScoreForm$;

  constructor(private _game: GameService, private _player: PlayerService) { }

  ngOnInit(): void {
  }

  public changeScore(playerId: number, score: number): void {
    if (this.isMinusScoreForm$.value) {
      if (score === 0) {
        return;
      }

      this._player.changeScore(playerId, score - 1);
      return;
    }

    this._game.addScore(playerId, score);
  }

  deletePlayer(playerId: number): void {
    this._player.deletePlayer(playerId);
  }
}
