import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesData } from '../../../services/dashboard-data.service';
import { MONTHS } from '../../dashboard.constants';

@Component({
  selector: 'app-deals-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deals-table.html',
  styleUrl: './deals-table.css',
})
export class DealsTable {
  @Input() salesData: SalesData[] = [];
  
  @Output() rowClick = new EventEmitter<void>();

  months = MONTHS;

  formatCurrency(value: number): string {
    return '$' + new Intl.NumberFormat('en-US').format(value);
  }

  onRowClick() {
    this.rowClick.emit();
  }
}
