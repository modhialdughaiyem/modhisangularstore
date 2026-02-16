import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../services/favorites-data.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  @Input() product!: Product;
  
  @Output() prevImage = new EventEmitter<number>();
  @Output() nextImage = new EventEmitter<number>();
  @Output() toggleFavorite = new EventEmitter<number>();

  onPrevImage(event: Event) {
    event.stopPropagation();
    this.prevImage.emit(this.product.id);
  }

  onNextImage(event: Event) {
    event.stopPropagation();
    this.nextImage.emit(this.product.id);
  }

  onToggleFavorite(event: Event) {
    event.stopPropagation();
    this.toggleFavorite.emit(this.product.id);
  }

  getStars(rating: number): string[] {
    let stars: string[] = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push('full');
      } else if (rating >= i - 0.5) {
        stars.push('half');
      } else {
        stars.push('empty');
      }
    }
    return stars;
  }
}
