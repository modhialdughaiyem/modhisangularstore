export enum DashboardMetricCategory {
  Users = 'users',
  Orders = 'orders',
  Sales = 'sales',
  Pending = 'pending'
}

export const METRIC_ICON_BG: Record<string, string> = {
  [DashboardMetricCategory.Users]: '#e0e7ff',
  [DashboardMetricCategory.Orders]: '#fef3c7',
  [DashboardMetricCategory.Sales]: '#d1fae5',
  [DashboardMetricCategory.Pending]: '#ffe4e6',
};

export const METRIC_ICON_COLOR: Record<string, string> = {
  [DashboardMetricCategory.Users]: '#6366f1',
  [DashboardMetricCategory.Orders]: '#f59e0b',
  [DashboardMetricCategory.Sales]: '#10b981',
  [DashboardMetricCategory.Pending]: '#f97316',
};

export enum Month {
  October = 'October',
  November = 'November',
  December = 'December'
}

export const MONTHS = Object.values(Month);
