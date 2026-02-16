import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDataService, Order } from '../services/order-data.service';
import { Pagination } from '../shared/components/pagination/pagination';
import { ORDER_TYPES, ORDER_STATUSES } from './order-list.constants';

@Component({
  selector: 'app-order-list',
  imports: [CommonModule, Pagination],
  templateUrl: './order-list.html',
  styleUrl: './order-list.css',
})
export class OrderList implements OnInit {
  allOrders: Order[] = [];
  filteredOrders: Order[] = [];
  
  currentPage = 1;
  pageSize = 9;
  totalItems = 0;

  filterType = '';
  filterStatus = '';

  orderTypes = ORDER_TYPES;
  orderStatuses = ORDER_STATUSES;

  constructor(private readonly dataService: OrderDataService, private readonly cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.dataService.getOrders().subscribe((data) => {
      this.allOrders = data;
      this.applyFilters();
      this.cdr.detectChanges();
    });
  }

  applyFilters() {
    let tempOrders: Order[] = [];
    
    for (let i = 0; i < this.allOrders.length; i++) {
      let order = this.allOrders[i];
      let matchType = true;
      let matchStatus = true;

      if (this.filterType !== '') {
        if (order.type !== this.filterType) {
          matchType = false;
        }
      }

      if (this.filterStatus !== '') {
        if (order.status !== this.filterStatus) {
          matchStatus = false;
        }
      }

      if (matchType && matchStatus) {
        tempOrders.push(order);
      }
    }

    this.totalItems = tempOrders.length;
    
    let startIndex = (this.currentPage - 1) * this.pageSize;
    let endIndex = startIndex + this.pageSize;
    
    this.filteredOrders = tempOrders.slice(startIndex, endIndex);
  }

  getShowingStart() {
    if (this.totalItems === 0) {
      return 0;
    }
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  getShowingEnd() {
    let end = this.currentPage * this.pageSize;
    if (end > this.totalItems) {
      return this.totalItems;
    }
    return end;
  }

  onFilterType(event: any) {
    this.filterType = event.target.value;
    this.currentPage = 1;
    this.applyFilters();
  }

  onFilterStatus(event: any) {
    this.filterStatus = event.target.value;
    this.currentPage = 1;
    this.applyFilters();
  }

  resetFilters() {
    this.filterType = '';
    this.filterStatus = '';
    this.currentPage = 1;
    this.applyFilters();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
      this.applyFilters();
    }
  }

  nextPage() {
    if (this.getShowingEnd() < this.totalItems) {
      this.currentPage = this.currentPage + 1;
      this.applyFilters();
    }
  }
}
