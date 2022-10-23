import { Component } from '@angular/core';
import { BoardService } from "../../services/board.service";
import { NgForm } from "@angular/forms";
import { PlayerService } from "../../services/player.service";

@Component({
  selector: 'app-add-player-modal',
  templateUrl: './add-player-modal.component.html',
  styleUrls: ['./add-player-modal.component.scss']
})
export class AddPlayerModalComponent {

  closeIcon = '/assets/images/popup-close.svg';

  constructor(private _player: PlayerService, private _board: BoardService) { }

  closeModal(): void {
    this._board.closeAddPlayerModal();
  }

  addNewPlayer(form: NgForm): void {
    if (form.valid === false) {
      return;
    }

    this._player.addNewPlayer(form.value.name);
    this._board.closeAddPlayerModal();
  }
}
