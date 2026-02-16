import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-team-member',
  imports: [FormsModule],
  templateUrl: './add-team-member.html',
  styleUrl: './add-team-member.css',
})
export class AddTeamMember {
  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  position = '';
  gender = '';

  constructor(private readonly router: Router) {}

  onSubmit() {
    this.router.navigate(['/team']);
  }
}
