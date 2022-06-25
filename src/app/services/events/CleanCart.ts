import { EventEmitter } from '@angular/core';
import { Sneaker } from '../../Types/snicker';

export class CleanCart {
  public cart$: EventEmitter<any>;
  public listCart: Sneaker[] = [];
  constructor() {
    this.cart$ = new EventEmitter();
  }

  list() {
    return [];
  }

  emit(data: []) {
    this.listCart = data;
    this.cart$.emit(this.listCart);
  }
}
