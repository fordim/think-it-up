import { Component, OnInit } from '@angular/core';
import {newPlayer} from "../../constants/interface";
import {NgForm} from "@angular/forms";
import {PlayerService} from "../../services/player.service";
import {BoardService} from "../../services/board.service";
import {GameService} from "../../services/game.service";

@Component({
  selector: 'app-new-game-modal',
  templateUrl: './new-game-modal.component.html',
  styleUrls: ['./new-game-modal.component.scss']
})
export class NewGameModalComponent implements OnInit {

  newPlayers: newPlayer[] = [];
  playersCount: number = 0;

  closeIcon = '/assets/images/popup-close.svg';

  constructor(private _player: PlayerService, private _board: BoardService, private _game: GameService) { }

  ngOnInit(): void {
  }

  addPlayers(form: NgForm): void {
    const players = form.value.playersCount;
    if (players === 0 || form.valid === false) {
      return;
    }

    for (let i = 0; i < players; i++) {
      this.newPlayers.push({ name: ''});
    }

    this.playersCount = players;
  }

  startNewGame(form: NgForm): void {
    if (form.valid === false) {
      return;
    }

    const players: string[] = Object.values(form.value);
    this._player.addNewPlayers(players);
    this._game.newGame();
    this._board.closeNewGameModal();
  }

  closeModal(): void {
    this._board.closeNewGameModal();
  }
}
