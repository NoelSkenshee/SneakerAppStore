import { Component, OnInit } from '@angular/core';
import { Buy, Order } from '../../Types/buy';
import { ReadCard } from '../../servises/events/readCart';
import { Sneaker } from '../../Types/snicker';
import { SnickerService } from '../../servises/snicker/snicker.service';
import { DialogRef } from '@angular/cdk/dialog';
import { CleanCart } from '../../servises/events/CleanCart';
import { Router } from '@angular/router';
import { URL } from 'src/app/inmutables/const';
import { PAY_MODAL, ROUTES } from '../../inmutables/const';

@Component({
  selector: 'app-pay-modal',
  templateUrl: './pay-modal.component.html',
  styleUrls: ['./pay-modal.component.css'],
})
export class PayModalComponent implements OnInit {
  creditcard: string = '';
  creditcardNo: string = '';
  client: string = '';
  email: string = '';
  image_card = URL.image_card;
  banckOptions = PAY_MODAL.bancks;
  order: Order[] = [];
  totalTopay = 0;
  constructor(
    private listSneaker: ReadCard,
    private cleanCart: CleanCart,
    private service: SnickerService,
    private controlDialog: DialogRef<PayModalComponent>,
    private nav: Router
  ) {
    listSneaker.listCart.map((sneaker) => {
      const { model, brand, price, name, sizeSelected } = sneaker;
      this.order.push({ model, brand, price, name, size: sizeSelected });
      this.totalTopay += sneaker.price;
    });
  }

  ngOnInit(): void {}

  save() {
    const { creditcard, creditcardNo, client, email, order, totalTopay } = this;
    if (
      !client ||
      !creditcard ||
      !creditcardNo ||
      !email ||
      order.length <= 0
    ) {
      return alert('Required field missing');
    }

    const data: Buy = {
      creditcard,
      creditcardNo,
      client,
      email,
      order,
      totalPay: totalTopay,
    };

    this.service.order(data).subscribe((res) => {
      this.controlDialog.close();
      this.cleanCart.emit([]);
      this.listSneaker.cleaner();
      this.nav.navigate([ROUTES.menu_route]);
    });
  }
}
