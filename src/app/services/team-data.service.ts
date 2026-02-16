import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TeamMember {
  name: string;
  role: string;
  email: string;
  avatarColor: string;
  initials: string;
  image?: string;
}

@Injectable({
  providedIn: 'root',
})
export class TeamDataService {
  private readonly http = inject(HttpClient);

  getTeamMembers(): Observable<TeamMember[]> {
    return this.http.get<TeamMember[]>('/data/team.json');
  }
}
