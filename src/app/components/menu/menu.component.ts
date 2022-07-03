import { Component, OnInit } from '@angular/core';
import { SnickerService } from '../../services/snicker/snicker.service';
import { Sneaker } from '../../Types/snicker';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Utils } from '../../inmutables/const';
const { movileDetected } = Utils.messages;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  sneakerList: Sneaker[] = [];
  isEmpty = true;
  constructor(
    private sneakerService: SnickerService,
    private device: DeviceDetectorService
  ) {}

  deviceMessage() {
    let isDesktop = this.device.isDesktop();
    if (!isDesktop) alert(movileDetected);
  }

  ngOnInit(): void {
    this.deviceMessage();
    this.listSneakers();
  }

  listSneakers() {
    this.sneakerService.listSniker().subscribe((data) => {
      this.sneakerList = data.data;
      if (this.sneakerList.length > 0) {
        this.isEmpty = false;
      }
    });
  }
}
