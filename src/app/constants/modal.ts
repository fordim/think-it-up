export interface Player {
  id: number,
  name: string,
  score: number
}

export interface newPlayer {
  name: string
}

export interface CategoryCard {
  text: string,
  stars: number
}

export const RESET_GAME = 'resetGame';
export const FINISH_GAME = 'finishGame';
