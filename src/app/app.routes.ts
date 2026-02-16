import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Favorites } from './favorites/favorites';
import { OrderList } from './order-list/order-list';
import { Team } from './team/team';
import { AddTeamMember } from './add-team-member/add-team-member';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'favorites', component: Favorites },
  { path: 'order-lists', component: OrderList },
  { path: 'team', component: Team },
  { path: 'add-team-member', component: AddTeamMember },
];
