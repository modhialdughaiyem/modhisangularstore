import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Order {
  id: string;
  name: string;
  address: string;
  date: string;
  type: string;
  status: 'Completed' | 'Processing' | 'Rejected' | 'On Hold' | 'In Transit';
}

@Injectable({
  providedIn: 'root',
})
export class OrderDataService {
  private readonly http = inject(HttpClient);

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('/data/orders.json');
  }
}
