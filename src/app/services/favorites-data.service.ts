import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  images: string[];
  currentImageIndex: number;
  isFavorite: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class FavoritesDataService {
  private readonly http = inject(HttpClient);

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/data/favorites.json');
  }
}
