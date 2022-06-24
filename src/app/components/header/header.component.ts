import { Component, OnInit } from '@angular/core';
import { SnickerService } from '../../servises/snicker/snicker.service';
import { Sneaker } from '../../Types/snicker';
import { EventCard } from '../../servises/events/addToCard';
import { ReadCard } from '../../servises/events/readCart';
import { Router } from '@angular/router';
import { CleanCart } from '../../servises/events/CleanCart';
import { ROUTES, URL, HEADER } from '../../inmutables/const';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  sneakerList: Sneaker[] = [];
  cart: Sneaker[] = [];
  page: number = 0;
  prev_page = 1;
  nextPage = 2;
  totalInCart = 0;
  logo = URL.logo;
  app_title = HEADER.app_name;
  constructor(
    private sneakerService: SnickerService,
    private cartEvent: EventCard,
    private readCart: ReadCard,
    private router: Router,
    private cleanCart: CleanCart
  ) {
    cartEvent.card$.subscribe((data) => {
      this.cart.push(data);
      this.totalInCart = this.cart.length;
    });

    cleanCart.cart$.subscribe(() => {
      this.sneakerList = [];
      this.cart = [];
      this.totalInCart = 0;
    });
  }

  pagination() {
    setInterval(() => {
      if (this.page == this.sneakerList.length - 4) {
        this.page = 0;
        this.nextPage = 1;
      }
      this.prev_page = this.page;
      this.page++;
      this.nextPage++;
    }, 10000);
  }

  ngOnInit(): void {
    this.sneakerService.listSniker().subscribe((data) => {
      console.log(data.data.length);
      this.sneakerList = data.data;
      this.pagination();
    });
  }

  goToCart() {
    if (this.totalInCart > 0) {
      this.readCart.emit(this.cart, false);
      setTimeout(() => {
      this.readCart.emit(this.cart, false);
      }, 300);

      this.router.navigate([ROUTES.cart_route]);

    }else this.goToMenu()
  }

   goToMenu(){
    this.router.navigate([ROUTES.menu_route])
   }
}
