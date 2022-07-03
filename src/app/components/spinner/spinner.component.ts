import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {
  progress = 0;

  constructor() {}

  ngOnInit(): void {
    this.spinnerProgress();
  }
  spinnerProgress() {
    return setInterval(() => {
      this.progress++;
      if (this.progress == 200) this.progress = -100;
    }, 15);
  }
}
