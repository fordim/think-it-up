import { Injectable } from '@angular/core';
import { Player } from "../constants/interface";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players$ = new BehaviorSubject<Player[]>([]);
  isDeleteForm$ = new BehaviorSubject<boolean>(false);
  isMinusScoreForm$ = new BehaviorSubject<boolean>(false);
  ids: number[] = [];

  constructor() {
    this.initiatePlayerService();
  }

  public addNewPlayer(name: string): void {
    const players = this.getPlayers();
    const newPlayer = {id: this.generateIdForPlayer(), name: name, score: 0} as Player;
    this.ids.push(newPlayer.id);
    this.updatePlayers([...players, newPlayer]);
  }

  public addNewPlayers(names: string[]): void {
    const players = names.map(name => {
        return {id: this.generateIdForPlayer(), name: name, score: 0}
      }
    )
    this.ids = [];
    this.updatePlayers(players);
  }

  public deletePlayer(playerId: number): void {
    const updatedPlayers = this.getPlayers().filter(player => player.id !== playerId);
    this.ids = this.ids.filter(id => id !== playerId);

    this.updatePlayers(updatedPlayers);
    this.deactivateDeleteForm();
  }

  public activateDeleteForm(): void {
    this.isDeleteForm$.next(true);
  }

  public deactivateDeleteForm(): void {
    this.isDeleteForm$.next(false);
  }

  public activateMinusScoreForm(): void {
    this.isMinusScoreForm$.next(true);
  }

  public deactivateMinusScoreForm(): void {
    this.isMinusScoreForm$.next(false);
  }

  public changeScore(playerId: number, newScore: number): void {
    let changePlayersScore: Player[] = [];
    this.getPlayers().map(player => {
      if (player.id === playerId) {
        changePlayersScore.push({ id: player.id, name: player.name, score: newScore });
      } else {
        changePlayersScore.push(player)
      }
    })

    this.updatePlayers(changePlayersScore);
  }

  public resetScore(): void {
    let changePlayersScore: Player[] = [];
    this.getPlayers().map(player => changePlayersScore.push({ id: player.id, name: player.name, score: 0 }));
    this.updatePlayers(changePlayersScore);
  }

  public getWinners(): Player[] {
    const players = this.getPlayers().slice(0);

    //Bubble sort
    for (let i = 1; i < players.length; i++) {
      for (let j = 0; j < players.length - i; j++) {
        if (players[j].score < players[j + 1].score) {
          [players[j], players[j + 1]] = [players[j + 1], players[j]];
        }
      }
    }

    const highScore = players[0]['score'];
    players.filter( player => player.score === highScore);

    return players.filter( player => player.score === highScore);
  }

  private getPlayers(): Player[] {
    return this.players$.value;
  }

  private updatePlayers(players: Player[]): void {
    this.players$.next(players);
    window.localStorage.setItem('players', JSON.stringify(players));
  }

  private generateIdForPlayer(): number {
    const id = Math.floor(Math.random() * (1000000 - 100000) + 100000);

    if (this.ids.includes(id)) {
      return this.generateIdForPlayer();
    }

    return id;
  }

  private initiatePlayerService(): void {
    const playersStore = window.localStorage.getItem('players') ?? null;
    playersStore === null ? this.players$.next([]) : this.players$.next(JSON.parse(playersStore) as Player[]);
    this.players$.value.map(player => this.ids.push(player.id));
  }
}
