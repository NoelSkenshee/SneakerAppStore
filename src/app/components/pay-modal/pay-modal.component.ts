import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from '../../services/sales/sales.service';
import { Buy, Order } from '../../Types/buy';
import { ReadCard } from '../../services/events/readCart';

import { DialogRef } from '@angular/cdk/dialog';
import { CleanCart } from '../../services/events/CleanCart';
import { Utils } from '../../inmutables/const';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '../../services/message/toast.service';
const { ROUTES, URL } = Utils;
const { PAY_MODAL } = Utils.components;
const { order } = Utils.messages;

@Component({
  selector: 'app-pay-modal',
  templateUrl: './pay-modal.component.html',
  styleUrls: ['./pay-modal.component.css'],
})
export class PayModalComponent implements OnInit {
  payForm!: FormGroup;
  image_card = URL.image_card;
  order: Order[] = [];
  totalTopay = 0;
  banckOptions = PAY_MODAL.bancks;
  errorsField: any = PAY_MODAL.errorsField;
  errorMessageField: any = PAY_MODAL.errorMessageField;
  creditcard = '';
  eror = '';
  valid = PAY_MODAL.class.invalid;
  constructor(
    private listSneaker: ReadCard,
    private cleanCart: CleanCart,
    private service: SalesService,
    private controlDialog: DialogRef<PayModalComponent>,
    private nav: Router,
    private formB: FormBuilder,
    private toast: ToastService
  ) {
    this.buildForm();
    this.payForm.valueChanges.subscribe(() => this.validator());
    this.validator();
    this.readSneakers();
  }

  ngOnInit(): void {}

  readSneakers() {
    this.listSneaker.listCart.map((sneaker) => {
      const { model, brand, price, name, sizesaleected } = sneaker;
      this.order.push({ model, brand, price, name, size: sizesaleected });
      this.totalTopay += sneaker.price;
    });
  }

  buildForm() {
    this.payForm = this.formB.group({
      creditcardNo: [
        0,
        [
          Validators.maxLength(18),
          Validators.minLength(13),
          Validators.required,
        ],
      ],
      client: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      creditcard: ['Select Banck', [Validators.required]],
    });
  }

  validator() {
    if (!this.payForm) return;
    for (const field in this.errorsField) {
      if (!this.errorsField.hasOwnProperty(field)) return;
      let valid = this.payForm.get(field);
      if (valid && valid.dirty && valid.invalid) {
        for (const error in valid.errors) {
          if (!valid.errors.hasOwnProperty(error)) return;
          const message = this.errorMessageField[field][error];
          this.errorsField[field] = message;
        }
      }
    }
    if (this.payForm.valid) this.valid = PAY_MODAL.class.valid;
    else this.valid = PAY_MODAL.class.invalid;
  }

  save() {
    this.eror = '';

    const { creditcard, creditcardNo, client, email } = this.payForm.value;
    if (this.order.length <= 0) {
      this.eror = order.message;
      return;
    }
    const data: Buy = {
      creditcard,
      creditcardNo,
      client,
      email,
      order: this.order,
      totalPay: this.totalTopay,
    };

    this.service.order(data).subscribe(
      (res) => {
        this.clear();
        this.closeDialog();
        this.navigateBck();
      },
      (err) => (this.eror = err())
    );
  }

  closeDialog() {
    this.controlDialog.close();
  }

  clear() {
    this.cleanCart.emit([]);
    this.listSneaker.cleaner();
    this.payForm.reset();
  }

  navigateBck() {
    this.nav.navigate([ROUTES.menu_route]);
  }
}
