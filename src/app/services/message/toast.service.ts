import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toast: ToastrService) {}

  toastError(title: string, error: string) {
    let ref = this.toast.error(error, title, { timeOut: 3000 });
  }
}
