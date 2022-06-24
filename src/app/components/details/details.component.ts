import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sneaker } from '../../Types/snicker';
import { SnickerService } from '../../servises/snicker/snicker.service';
import { EventCard } from '../../servises/events/addToCard';
import { ROUTES } from '../../inmutables/const';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  sneaker!: Sneaker;
  selectedSize: number = 0;
  constructor(
    private activeR: ActivatedRoute,
    private http: SnickerService,
    private add: EventCard,
    private router:Router
  ) {}

  ngOnInit(): void {
    const id = this.activeR.snapshot.params.id;
    this.sneaker = this.http.getSneakerById(id);
    if(!this.sneaker)this.router.navigate([ROUTES.menu_route])
  }

  addToCard() {
    this.sneaker.sizeSelected = this.selectedSize;
    this.add.add(this.sneaker);
  }
}
