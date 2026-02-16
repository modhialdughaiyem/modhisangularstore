import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardMetric } from '../../../services/dashboard-data.service';
import { METRIC_ICON_BG, METRIC_ICON_COLOR } from '../../dashboard.constants';

@Component({
  selector: 'app-dashboard-metrics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-metrics.html',
  styleUrl: './dashboard-metrics.css',
})
export class DashboardMetrics {
  @Input() metrics: DashboardMetric[] = [];

  formatValue(metric: DashboardMetric): string {
    if (metric.prefix) {
      return metric.prefix + new Intl.NumberFormat('en-US').format(metric.value);
    }
    return new Intl.NumberFormat('en-US').format(metric.value);
  }

  getIconBg(category: string): string {
    return METRIC_ICON_BG[category] || '#f3f4f6';
  }

  getIconColor(category: string): string {
    return METRIC_ICON_COLOR[category] || '#6b7280';
  }
}
