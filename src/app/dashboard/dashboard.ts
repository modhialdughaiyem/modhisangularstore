import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Filler,
  Tooltip,
  ChartConfiguration,
} from 'chart.js';
import {
  DashboardDataService,
  DashboardMetric,
  SalesData,
} from '../services/dashboard-data.service';
import { DashboardMetrics } from './components/dashboard-metrics/dashboard-metrics';
import { SalesChart } from './components/sales-chart/sales-chart';
import { DealsTable } from './components/deals-table/deals-table';
import { Month } from './dashboard.constants';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  Filler,
  Tooltip,
);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DashboardMetrics, SalesChart, DealsTable],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  metrics: DashboardMetric[] = [];
  salesData: SalesData[] = [];
  isLoading = true;

  selectedMonth = Month.October;
  baseChartData: number[] = [];

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [],
  };

  lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#3b82f6',
        titleFont: { size: 12 },
        bodyFont: { size: 12 },
        padding: 8,
        cornerRadius: 6,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#9ca3af', font: { size: 12 } },
        border: { display: false },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: '#9ca3af',
          font: { size: 12 },
          callback: (value) => value + '%',
          stepSize: 20,
        },
        grid: {
          color: '#f3f4f6',
        },
        border: { display: false },
      },
    },
    elements: {
      point: {
        radius: 4,
        hoverRadius: 6,
        backgroundColor: '#3b82f6',
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    },
  };

  constructor(
    private dataService: DashboardDataService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private loadDashboardData(): void {
    this.isLoading = true;
    this.dataService.getDashboardData().subscribe({
      next: (data) => {
        this.metrics = data.metrics;
        this.salesData = data.salesData;
        this.baseChartData = [...data.chartData.dataPoints];
        this.buildChart(data.chartData.labels, data.chartData.dataPoints);
        this.isLoading = false;
        this.cdr.detectChanges();

        setTimeout(() => {
          if (this.chart) {
            this.chart.update();
          }
        });
      },
      error: (err) => {
        console.error('Failed to load dashboard data', err);
        this.isLoading = false;
        this.cdr.detectChanges();
      },
    });
  }

  private buildChart(labels: string[], dataPoints: number[]): void {
    this.lineChartData = {
      labels,
      datasets: [
        {
          label: 'Sales',
          data: dataPoints,
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.08)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#3b82f6',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointRadius: 3,
          pointHoverRadius: 6,
        },
      ],
    };
  }

  onMonthChange(month: string): void {
    this.selectedMonth = month as Month;
    const seed = month.length;
    const newData = this.baseChartData.map((v) => {
      const variation = (Math.random() - 0.5) * 20;
      return Math.max(0, Math.min(100, v + variation));
    });

    const currentLabels = this.lineChartData.labels as string[];
    this.buildChart(currentLabels, newData);
  }

  navigateToOrders(): void {
    this.router.navigate(['/order-lists']);
  }
}
