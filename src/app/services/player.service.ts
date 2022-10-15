import { Injectable } from '@angular/core';
import {Player} from "../constants/modal";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players$ = [
    {
      name: 'Dima',
      score: 5
    },
    {
      name: 'Mark',
      score: 3
    },
    {
      name: 'Jack',
      score: 2
    },
    {
      name: 'Duck',
      score: 5
    },
    {
      name: 'Tris',
      score: 2
    },
    {
      name: 'Marry',
      score: 9
    },
    {
      name: 'John',
      score: 0
    },
    {
      name: 'Agata',
      score: 1
    },
    {
      name: 'Dima',
      score: 5
    },
    {
      name: 'Mark',
      score: 3
    },
    {
      name: 'Jack',
      score: 2
    },
    {
      name: 'Duck',
      score: 5
    },
    {
      name: 'Tris',
      score: 2
    },
    {
      name: 'Marry',
      score: 9
    },
    {
      name: 'John',
      score: 0
    },
    {
      name: 'Agata',
      score: 1
    },
    {
      name: 'Dima',
      score: 5
    },
    {
      name: 'Mark',
      score: 3
    },
    {
      name: 'Jack',
      score: 2
    },
    {
      name: 'Duck',
      score: 5
    },
  ];

  constructor() { }

  //TODO может не нужно?
  public getPlayer(indexPlayer: number): Player {
    return this.players$[indexPlayer];
  }

  //TODO потом нужно будет заменить на rxjs
  public addScore(indexPlayer: number, stars: number): void {
    const player = this.players$[indexPlayer];
    console.log(player);
    player.score = player.score + stars;
    this.players$[indexPlayer] = player;
    console.log(player);
  }
}
