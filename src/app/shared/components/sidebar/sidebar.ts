import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  @Input() isOpen: boolean = false;
  @Output() toggle = new EventEmitter<void>();

  onToggle() {
    this.toggle.emit();
  }

  onNavClick() {
    if (this.isOpen) {
      this.toggle.emit();
    }
  }
}
