import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent implements OnInit {
  constructor(private shopService: ShopService) {}

  categories: any[] = [];

  ngOnInit(): void {
    this.shopService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
