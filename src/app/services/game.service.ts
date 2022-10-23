import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
import { CATEGORIES } from "../constants/categories-en-const";
import { LETTERS } from "../constants/letters-en-const";
import { CategoryCard } from "../constants/interface";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public categoryCards$ = new BehaviorSubject<CategoryCard[]>([]);
  public categoryCardsCount$ = new BehaviorSubject<number>(0);
  public letterCards$ = new BehaviorSubject<string[]>([]);
  public openCategory$ = new BehaviorSubject<CategoryCard>({text: '', stars: 1});
  public openLetter$ = new BehaviorSubject<string>('');

  constructor() {
    this.initiateGameService();
  }

  public openCategoryCards(): void {
    const categoryCards = this.categoryCards$.value;
    this.openCategory$.next(categoryCards.pop()!);
    this.categoryCardsCount$.next(this.categoryCards$.value.length)
    this.updateCategoryCards();
  }

  public openLetterCards(): void {
    let letterCards = this.letterCards$.value;
    if (letterCards.length === 0) {
      this.letterCards$.next(this.shuffleLetterCards());
      letterCards = this.letterCards$.value;
    }

    this.openLetter$.next(letterCards.pop()!);
    this.updateLetterCards();
  }

  public clearCards(): void {
    this.openCategory$.next({text: '', stars: 0});
    this.openLetter$.next('');
  }

  public getStars(): number {
    return this.openCategory$.value.stars;
  }

  public newGame(): void {
    this.categoryCards$.next(this.shuffleCategoryCards());
    this.openCategory$.next({text: '', stars: 1});
    this.letterCards$.next(this.shuffleLetterCards());
    this.openLetter$.next('');
    this.categoryCardsCount$.next(this.categoryCards$.value.length);
    this.updateCategoryCards();
    this.updateLetterCards();
  }

  private shuffleCategoryCards(): CategoryCard[] {
    return CATEGORIES.slice(0).sort(() => Math.random() - 0.5);
  }

  private shuffleLetterCards(): string[] {
    return LETTERS.slice(0).sort(() => Math.random() - 0.5);
  }

  private updateCategoryCards(): void {
    window.localStorage.setItem('categoryCards', JSON.stringify(this.categoryCards$.value));
    window.localStorage.setItem('openCategory', JSON.stringify(this.openCategory$.value));
  }

  private updateLetterCards(): void {
    window.localStorage.setItem('letterCards', JSON.stringify(this.letterCards$.value));
    window.localStorage.setItem('openLetter', JSON.stringify(this.openLetter$.value));
  }

  private initiateGameService(): void {
    const categoryCardsStore = window.localStorage.getItem('categoryCards') ?? '';
    categoryCardsStore === ''
      ? this.categoryCards$.next([])
      : this.categoryCards$.next(JSON.parse(categoryCardsStore) as CategoryCard[]);

    const openCategoryStore = window.localStorage.getItem('openCategory') ?? null;
    openCategoryStore === null
      ? this.openCategory$.next({text: '', stars: 1})
      : this.openCategory$.next(JSON.parse(openCategoryStore) as CategoryCard);

    const letterCardsStore = window.localStorage.getItem('letterCards') ?? null;
    letterCardsStore === null
      ? this.letterCards$.next([])
      : this.letterCards$.next(JSON.parse(letterCardsStore) as string[]);

    const openLetterStore = window.localStorage.getItem('openLetter') ?? null;
    openLetterStore === null
      ? this.openLetter$.next('')
      : this.openLetter$.next(JSON.parse(openLetterStore) as string)

    this.categoryCardsCount$.next(this.categoryCards$.value.length);
  }
}
