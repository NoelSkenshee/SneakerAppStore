import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sneaker } from '../../Types/snicker';
import { SnickerService } from '../../services/snicker/snicker.service';
import { EventCard } from '../../services/events/addToCard';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  sneaker!: Sneaker;
  selectedSize: number = 1;
  constructor(
    private activeR: ActivatedRoute,
    private http: SnickerService,
    private add: EventCard
  ) {}

  ngOnInit(): void {
    this.readSneakerById();
  }

  readSneakerById() {
    const id = this.activeR.snapshot.params.id;
    this.http.getSneakerById(id).subscribe((sneaker) => {
      this.sneaker = sneaker.data;
    });
  }

  addToCard() {
    this.sneaker.sizesaleected = this.selectedSize;
    this.add.add(this.sneaker);
  }
}
