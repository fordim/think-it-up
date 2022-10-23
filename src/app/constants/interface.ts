import {ModalType} from "./consts";

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

export interface GeneralModal {
  text: string,
  type: ModalType,
  button: string
}
