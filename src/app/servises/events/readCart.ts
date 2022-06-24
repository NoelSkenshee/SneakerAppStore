import { EventEmitter } from '@angular/core';
import { Sneaker } from '../../Types/snicker';

export class ReadCard {
  public cart$: EventEmitter<{ data: Sneaker[]; clean: boolean }>;
  public listCart: Sneaker[] = [];
  constructor() {
    this.cart$ = new EventEmitter();
  }

  read() {
    return this.listCart;
  }
  cleaner() {
    this.emit(this.listCart, true);
  }

  emit(sneakerList: Sneaker[], clean: boolean) {
    if (!clean) this.listCart = sneakerList;
    else this.listCart = [];
    this.cart$.emit({ data: sneakerList, clean });
  }
}
