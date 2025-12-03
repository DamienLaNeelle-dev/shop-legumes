import { Component } from '@angular/core';
import { CategoryListComponent } from '../category-list/category-list.component';
import { LegumeListComponent } from '../legume-list/legume-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CategoryListComponent, LegumeListComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  legumes: any[] = [];
  selectedCategoryId: number | null = null;
  legumeCount: number = 0;

  get count(): number {
    return this.legumes.length;
  }

  onCategorySelected(id: number) {
    this.selectedCategoryId = id;
  }

  onLegumeCountChanged(count: number) {
    this.legumeCount = count;
  }
}
