import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sneaker } from 'src/app/Types/snicker';
import { catchError } from 'rxjs/operators';
import { Utils } from 'src/app/inmutables/const';
const { api_url, endPoints } = Utils.URL;
import { ErrorHandlerService } from '../error/error-handler.service';
import {
  HtttpResponseSneakerById,
  HtttpResponseSneaker,
} from '../../Types/snicker';
@Injectable({
  providedIn: 'root',
})
export class SnickerService {
  private sneaker_url: string = api_url(endPoints.sneaker);

  constructor(
    private http: HttpClient,
    private handlerErr: ErrorHandlerService
  ) {}

  listSniker(): Observable<HtttpResponseSneaker> {
    return this.http
      .get<HtttpResponseSneaker>(this.sneaker_url)
      .pipe(catchError(this.handlerErr.handlerError));
  }

  getSneakerById(id: string): Observable<HtttpResponseSneakerById> {
    return this.http
      .get<HtttpResponseSneakerById>(api_url(endPoints.sneakerId(id)))
      .pipe(catchError(this.handlerErr.handlerError));
  }
}
