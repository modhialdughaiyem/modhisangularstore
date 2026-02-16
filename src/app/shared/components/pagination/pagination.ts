import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css'
})
export class Pagination {
  @Input() currentPage: number = 1;
  @Input() totalItems: number = 0;
  @Input() showingStart: number = 0;
  @Input() showingEnd: number = 0;
  
  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  onPrev() {
    this.prev.emit();
  }

  onNext() {
    this.next.emit();
  }
}
