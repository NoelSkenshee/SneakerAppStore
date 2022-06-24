import { Component, OnInit } from '@angular/core';
import { SnickerService } from '../../servises/snicker/snicker.service';
import { Sneaker } from '../../Types/snicker';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  sneakerList: Sneaker[] = [];

  constructor(private sneakerService: SnickerService) {}

  ngOnInit(): void {
    this.sneakerService.listSniker().subscribe((data) => {
      this.sneakerList = data.data;
    });
  }
}
