import { Component, OnInit } from '@angular/core';
import { Sneaker } from '../../Types/snicker';
import { ReadCard } from '../../servises/events/readCart';
import { MatDialog } from '@angular/material/dialog';
import { PayModalComponent } from '../pay-modal/pay-modal.component';
import { Router } from '@angular/router';
import { CleanCart } from '../../servises/events/CleanCart';
import { CART, ROUTES } from '../../inmutables/const';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  sneaker!: Sneaker;
  sneakers: Sneaker[] = [];
  page = 0;
  totalPay = 0;

  constructor(
    private listSneaker: ReadCard,
    private dialog: MatDialog,
    private router: Router,
    private clean: CleanCart
  ) {}

  async ngOnInit(): Promise<void> {
    this.readCart();
  }

  readCart() {
    this.listSneaker.cart$.subscribe(({ data, clean }) => {
      if (clean) {
        this.router.navigate([ROUTES.menu_route]);
        return;
      }
      this.sneakers = data;
      this.sneaker = this.sneakers[this.page];
      this.totalPay = 0;
      Promise.all(data.map((sneaker) => (this.totalPay += sneaker.price)));

    });
    setTimeout(() => {
      if (this.sneakers.length <= 0)
        this.router.navigate([ROUTES.menu_route]);
    }, 5000);
  }


  openDialog() {
    this.dialog.open(PayModalComponent, { maxWidth: CART.modal_style });
  }

  nextPage() {
    if (this.sneakers.length - 1 == this.page) {
      this.page = 0;
      this.sneaker = this.sneakers[this.page];
    } else if (this.sneakers[this.page++])
      this.sneaker = this.sneakers[this.page];
  }

  prevPage() {
    if (this.page <= 0) this.nextPage();
    else if (this.sneakers[this.page--])
      this.sneaker = this.sneakers[this.page];
  }

  cleanCart() {
    this.clean.cart$.subscribe(() => {
      this.sneakers = [];
      let empty: any = {};
      this.sneaker = empty;
    });
  }
}
