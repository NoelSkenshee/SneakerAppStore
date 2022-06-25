import { Component, OnInit } from '@angular/core';
import { SnickerService } from '../../services/snicker/snicker.service';
import { Sneaker } from '../../Types/snicker';
import { DeviceDetectorService } from 'ngx-device-detector';
import { movileDetected } from '../../inmutables/const';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  sneakerList: Sneaker[] = [];
  isEmpty = true;
  progress = 0;
  constructor(
    private sneakerService: SnickerService,
    private device: DeviceDetectorService
  ) {}

  deviceMessage() {
    let isDesktop = this.device.isDesktop();
    if (!isDesktop)alert(movileDetected);
  }
  ngOnInit(): void {
 this.deviceMessage();
    var animation = setInterval(() => {
      this.progress++;
      if (this.progress == 200) this.progress = -100;
    }, 15);

    this.sneakerService.listSniker().subscribe((data) => {
      this.sneakerList = data.data;
      if (this.sneakerList.length > 0) {
        setTimeout(() => {
          this.isEmpty = false;
          clearInterval(animation);
        }, 1000);
      }
    });
  }
}
