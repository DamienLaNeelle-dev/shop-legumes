import { Component } from '@angular/core';
import { CategoryListComponent } from '../category-list/category-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CategoryListComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {}
