import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DashboardMetric {
  id: string;
  name: string;
  value: number;
  change: number;
  changeType: 'increase' | 'decrease' | 'neutral';
  changeLabel: string;
  category: string;
  prefix?: string;
}

export interface ChartDataPayload {
  labels: string[];
  dataPoints: number[];
}

export interface SalesData {
  id: string;
  product: string;
  productIcon: string;
  location: string;
  dateTime: string;
  piece: number;
  revenue: number;
  status: 'Delivered' | 'Pending' | 'Rejected';
}

export interface DashboardData {
  metrics: DashboardMetric[];
  chartData: ChartDataPayload;
  salesData: SalesData[];
}

@Injectable({
  providedIn: 'root',
})
export class DashboardDataService {
  private readonly http = inject(HttpClient);

  getDashboardData(): Observable<DashboardData> {
    return this.http.get<DashboardData>('/data/dashboard.json');
  }
}
