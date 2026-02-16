import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesDataService, Product } from '../services/favorites-data.service';
import { ProductCard } from './components/product-card/product-card';

@Component({
  selector: 'app-favorites',
  imports: [CommonModule, ProductCard],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
})
export class Favorites implements OnInit {
  products: Product[] = [];

  constructor(private readonly dataService: FavoritesDataService, private readonly cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.dataService.getProducts().subscribe((data) => {
      this.products = data;
      this.cdr.detectChanges();
    });
  }

  prevImage(productId: number) {
    this.products = this.products.map((p) => {
      if (p.id === productId) {
        const newIndex =
          p.currentImageIndex === 0 ? p.images.length - 1 : p.currentImageIndex - 1;
        return { ...p, currentImageIndex: newIndex };
      }
      return p;
    });
  }

  nextImage(productId: number) {
    this.products = this.products.map((p) => {
      if (p.id === productId) {
        const newIndex = (p.currentImageIndex + 1) % p.images.length;
        return { ...p, currentImageIndex: newIndex };
      }
      return p;
    });
  }

  toggleFavorite(productId: number) {
    this.products = this.products.map((p) => {
      if (p.id === productId) {
        return { ...p, isFavorite: !p.isFavorite };
      }
      return p;
    });
  }
}
