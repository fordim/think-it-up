import { Component, OnInit } from '@angular/core';
import {BoardService} from "../services/board.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  newGameModal$ = this._board.newGameModal$;
  addPlayerModal$ = this._board.addPlayerModal$;

  constructor(private _board: BoardService) { }

  ngOnInit(): void {
  }

}
