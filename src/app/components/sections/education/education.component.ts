import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Education } from '../../../models/resume.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-4">Education</h2>
      <div *ngFor="let edu of educationList; let i = index" class="mb-4 p-4 border rounded">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input [(ngModel)]="edu.degree" placeholder="Degree" class="input" required>
          <input [(ngModel)]="edu.institution" placeholder="Institution" class="input" required>
          <input [(ngModel)]="edu.year" placeholder="Year" class="input" required>
          <input [(ngModel)]="edu.gpa" placeholder="GPA (optional)" class="input">
        </div>
        <button (click)="removeEducation(i)" class="btn-danger mt-2">Remove</button>
      </div>
      <button (click)="addEducation()" class="btn-primary">Add Education</button>
    </section>
  `
})
export class EducationComponent {
  @Input() educationList!: Education[];

  addEducation() {
    this.educationList.push({
      degree: '',
      institution: '',
      year: '',
      gpa: ''
    });
  }

  removeEducation(index: number) {
    this.educationList.splice(index, 1);
  }
}