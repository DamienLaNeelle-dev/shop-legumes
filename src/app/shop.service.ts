import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private api = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<any[]>(`${this.api}/categories`);
  }

  getLegumes() {
    return this.http.get<any[]>(`${this.api}/legumes`);
  }

  getLegumesByCat(categoryId: number) {
    return this.http.get<any[]>(`${this.api}/legumes?categoryId=${categoryId}`);
  }

  updateLegume(legume: any) {
    return this.http.put(`${this.api}/legumes/${legume.id}`, legume);
  }
}
