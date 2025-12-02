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
export class ShopComponent {}
