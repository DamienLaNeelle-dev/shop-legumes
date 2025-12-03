import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ShopService } from '../shop.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-legume-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './legume-list.component.html',
  styleUrl: './legume-list.component.css',
})
export class LegumeListComponent {
  legumes: any[] = [];
  editingIndex: number | null = null;
  @Input() selectedCategoryId: number | null = null;
  @Output() countChanged = new EventEmitter<number>();
  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.loadLegumes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCategoryId']) {
      this.loadLegumes();
    }
  }

  private loadLegumes(): void {
    if (this.selectedCategoryId != null) {
      this.shopService
        .getLegumesByCat(this.selectedCategoryId)
        .subscribe((data) => {
          this.legumes = data;
          console.log('Légumes filtres : ', this.legumes);
          this.countChanged.emit(this.legumes.length);
        });
    } else {
      this.shopService.getLegumes().subscribe((data) => {
        this.legumes = data;
        console.log('Tous les légumes : ', this.legumes);
        this.countChanged.emit(this.legumes.length);
      });
    }
  }

  startEdit(legume: any, index: number): void {
    this.editingIndex = index;
    this.editingLegume = { ...legume };
    console.log('Modification du légume : ', legume);
  }

  editingLegume: any = {
    id: 0,
    name: '',
    price: 0,
    categoryId: 0,
  };

  submitEdit(e: any): void {
    this.shopService.updateLegume(this.editingLegume).subscribe(() => {
      this.loadLegumes();
    });
  }
}
