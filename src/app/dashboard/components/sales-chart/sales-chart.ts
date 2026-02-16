import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { MONTHS } from '../../dashboard.constants';

@Component({
  selector: 'app-sales-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective, FormsModule],
  templateUrl: './sales-chart.html',
  styleUrl: './sales-chart.css',
})
export class SalesChart {
  @Input() lineChartData: ChartConfiguration<'line'>['data'] = { datasets: [] };
  @Input() lineChartOptions: ChartConfiguration<'line'>['options'] = {};
  @Input() selectedMonth: string = 'October';
  
  @Output() monthChange = new EventEmitter<string>();

  months = MONTHS;

  onMonthChange(month: string) {
    this.monthChange.emit(month);
  }
}
