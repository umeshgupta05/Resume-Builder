import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonalInfo } from '../../../models/resume.model';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-4">Personal Information</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input [(ngModel)]="info.fullName" placeholder="Full Name" class="input" required>
        <input [(ngModel)]="info.email" placeholder="Email" class="input" type="email" required>
        <input [(ngModel)]="info.phone" placeholder="Phone" class="input" required>
        <input [(ngModel)]="info.linkedIn" placeholder="LinkedIn (optional)" class="input">
      </div>
      <textarea [(ngModel)]="info.address" placeholder="Address" class="input mt-4 w-full" required></textarea>
    </section>
  `
})
export class PersonalInfoComponent {
  @Input() info!: PersonalInfo;
}