import { EventEmitter } from '@angular/core';
import { Sneaker } from '../../Types/snicker';

export class EventCard {
  public card$: EventEmitter<Sneaker>;
  private sneakerList: Sneaker[] = [];

  constructor() {
    this.card$ = new EventEmitter();
  }

  list(): Sneaker[] {
    return this.sneakerList;
  }

  add(item: Sneaker): void {
    this.sneakerList.push(item);
    this.card$.emit(item);
  }
}
