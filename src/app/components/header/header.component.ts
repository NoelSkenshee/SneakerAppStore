import { Component, OnInit } from '@angular/core';
import { SnickerService } from '../../services/snicker/snicker.service';
import { Sneaker } from '../../Types/snicker';
import { EventCard } from '../../services/events/addToCard';
import { ReadCard } from '../../services/events/readCart';
import { Router } from '@angular/router';
import { CleanCart } from '../../services/events/CleanCart';
import { Utils } from '../../inmutables/const';
const { HEADER } = Utils.components;
const { ROUTES, URL } = Utils;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  sneakerList: Sneaker[] = [];
  cart: Sneaker[] = [];
  cartfull = '';
  fullInterval: any;
  page_C: number = 0;
  page_A = 0;
  page_B = 0;
  totalInCart = 0;
  logo = URL.logo;
  app_title = HEADER.app_name;
  setIntervalPage: any;
  constructor(
    private sneakerService: SnickerService,
    private cartEvent: EventCard,
    private readCart: ReadCard,
    private router: Router,
    private cleanCart: CleanCart
  ) {
    this.readSneakers();

    this.onAddToCart();
    this.onClenCart();
  }

  ngOnInit(): void {}

  readSneakers() {
    this.sneakerService.listSniker().subscribe((data) => {
      this.sneakerList = data.data;
      this.initializePagination();
    });
  }

  onAddToCart() {
    this.cartEvent.card$.subscribe((data) => {
      clearInterval(this.fullInterval);
      this.cart.push(data);
      this.fullInterval = setInterval(() => {
        this.cartfull ? (this.cartfull = '') : (this.cartfull = 'cart_full');
      }, 4000);
      this.totalInCart = this.cart.length;
    });
  }

  onClenCart() {
    this.cleanCart.cart$.subscribe(() => {
      this.cart = [];
      this.totalInCart = 0;
      this.cartfull = '';
      clearInterval(this.fullInterval);
    });
  }

  pagination() {
    this.setIntervalPage = setInterval(() => {
      let total = this.sneakerList.length;
      if (this.page_C == 0) {
        clearInterval(this.setIntervalPage);
        this.initializePagination();
        return;
      }
      this.page_A = this.page_B;
      this.page_B = this.page_C;
      this.page_C -= 1;
    }, 5000);
  }

  initializePagination() {
    this.page_C = this.sneakerList.length - 1;
    this.page_B = this.page_C - 1;
    this.page_A = this.page_B - 1;
    this.pagination();
  }

  goToCart() {
    if (this.totalInCart > 0) {
      this.readCart.emit(this.cart, false);
      setTimeout(() => {
        this.readCart.emit(this.cart, false);
      }, 300);

      this.router.navigate([ROUTES.cart_route]);
    } else this.goToMenu();
  }

  goToMenu() {
    this.router.navigate([ROUTES.menu_route]);
  }
}
