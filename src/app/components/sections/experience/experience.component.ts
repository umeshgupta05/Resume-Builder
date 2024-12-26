import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Experience } from '../../../models/resume.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-4">Experience</h2>
      <div *ngFor="let exp of experienceList; let i = index" class="mb-4 p-4 border rounded">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input [(ngModel)]="exp.company" placeholder="Company" class="input" required>
          <input [(ngModel)]="exp.position" placeholder="Position" class="input" required>
          <input [(ngModel)]="exp.startDate" placeholder="Start Date" class="input" required>
          <input [(ngModel)]="exp.endDate" placeholder="End Date" class="input" required>
        </div>
        <div class="mt-2">
          <textarea [(ngModel)]="exp.description.join('\n')" 
                    (blur)="updateDescription(i, $event)" 
                    placeholder="Description (one point per line)" 
                    class="input w-full h-32"
                    required></textarea>
        </div>
        <button (click)="removeExperience(i)" class="btn-danger mt-2">Remove</button>
      </div>
      <button (click)="addExperience()" class="btn-primary">Add Experience</button>
    </section>
  `
})
export class ExperienceComponent {
  @Input() experienceList!: Experience[];

  addExperience() {
    this.experienceList.push({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: []
    });
  }

  removeExperience(index: number) {
    this.experienceList.splice(index, 1);
  }

  updateDescription(index: number, event: any) {
    const text = event.target.value;
    this.experienceList[index].description = text.split('\n').filter(line => line.trim());
  }
}