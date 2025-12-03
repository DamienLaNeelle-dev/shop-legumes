import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShopService } from '../shop.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent implements OnInit {
  categories: any[] = [];
  selectedCategoryId: number | null = null;
  @Output() categorySelected = new EventEmitter<number>();
  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.shopService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  onCategoryClick(c: any) {
    this.selectedCategoryId = c.id;
    this.categorySelected.emit(c.id);
  }
}
