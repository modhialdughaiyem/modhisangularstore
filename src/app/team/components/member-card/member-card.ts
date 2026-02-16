import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamMember } from '../../../services/team-data.service';

@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './member-card.html',
  styleUrl: './member-card.css',
})
export class MemberCard {
  @Input() member!: TeamMember;
}
