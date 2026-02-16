export enum OrderType {
  Electric = 'Electric',
  Book = 'Book',
  Medicine = 'Medicine',
  Mobile = 'Mobile',
  Watch = 'Watch'
}

export enum OrderStatus {
  Completed = 'Completed',
  Processing = 'Processing',
  Rejected = 'Rejected',
  OnHold = 'On Hold',
  InTransit = 'In Transit'
}

export const ORDER_TYPES = Object.values(OrderType);
export const ORDER_STATUSES = Object.values(OrderStatus);
