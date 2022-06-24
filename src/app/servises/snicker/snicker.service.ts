import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Sneaker } from 'src/app/Types/snicker';
import { tap } from 'rxjs/operators';
import { Buy } from '../../Types/buy';
import { URL } from 'src/app/inmutables/const';

@Injectable({
  providedIn: 'root',
})
export class SnickerService {
  private sneaker_url: string = URL.api_url(0);
  private sale_url: string = URL.api_url(1);


  private sneakerList: Sneaker[] = [];

  constructor(private http: HttpClient) {
    this.listSniker();
  }

  listSniker(): Observable<{
    error: boolean;
    message: string;
    data: Sneaker[];
  }> {
    return this.http
      .get<{ error: boolean; message: string; data: Sneaker[] }>(
        this.sneaker_url
      )
      .pipe(tap((res) => (this.sneakerList = res.data)));
  }

  getSneakerById(id: string): Sneaker {
    return this.sneakerList.filter((snk) => snk._id == id)[0];
  }

  order(order: Buy) {
    return this.http
      .post<{ error: boolean; message: string; data: any }>(
        this.sale_url,
        order
      )
      .pipe(tap((res) =>res));
  }
}
