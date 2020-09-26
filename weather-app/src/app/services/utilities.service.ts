import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class UtilitiesService {

  constructor(private toastr: ToastrService) {
  }

  showError() {
    this.toastr.error('Please try again later', 'Something went wrong', { positionClass: 'toast-bottom-right' })

  }
}
