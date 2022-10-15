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

  constructor(private _game: GameService, private _player: PlayerService) { }

  ngOnInit(): void {
  }

  public addScore(index: number): void {
    console.log(index);
    this._game.addScore(index);
    this._game.clearCards();
  }
}
