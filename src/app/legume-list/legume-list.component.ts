import { Component } from '@angular/core';
import { ShopService } from '../shop.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legume-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legume-list.component.html',
  styleUrl: './legume-list.component.css',
})
export class LegumeListComponent {
  constructor(private shopService: ShopService) {}

  legumes: any[] = [];

  ngOnInit(): void {
    this.shopService.getLegumes().subscribe((data) => {
      this.legumes = data;
    });
  }
}
