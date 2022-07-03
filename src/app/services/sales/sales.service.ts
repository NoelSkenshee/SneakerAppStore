import { Injectable } from '@angular/core';
import { Buy } from '../../Types/buy';
import { HttpClient } from '@angular/common/http';
import { Utils } from 'src/app/inmutables/const';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from '../error/error-handler.service';
const { api_url, endPoints } = Utils.URL;
@Injectable({
  providedIn: 'root',
})
export class SalesService {
  private static sale_url: string = api_url(endPoints.sale);
  constructor(
    private http: HttpClient,
    private handlerErr: ErrorHandlerService
  ) {}

  order(order: Buy) {
    return this.http
      .post<{ error: boolean; message: string; data: any }>(
        SalesService.sale_url,
        order
      )
      .pipe(catchError(this.handlerErr.handlerError));
  }
}
