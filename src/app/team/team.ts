import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TeamDataService, TeamMember } from '../services/team-data.service';
import { MemberCard } from './components/member-card/member-card';

@Component({
  selector: 'app-team',
  imports: [RouterLink, MemberCard],
  templateUrl: './team.html',
  styleUrl: './team.css',
})
export class Team implements OnInit {
  members: TeamMember[] = [];

  constructor(private readonly dataService: TeamDataService, private readonly cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.dataService.getTeamMembers().subscribe((data) => {
      this.members = data;
      this.cdr.detectChanges();
    });
  }
}
