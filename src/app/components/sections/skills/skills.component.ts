import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Skill } from '../../../models/resume.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="mb-6">
      <h2 class="text-xl font-semibold mb-4">Skills</h2>
      <div *ngFor="let skill of skillsList; let i = index" class="mb-4 p-4 border rounded">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input [(ngModel)]="skill.name" placeholder="Skill Name" class="input" required>
          <select [(ngModel)]="skill.level" class="input" required>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        <button (click)="removeSkill(i)" class="btn-danger mt-2">Remove</button>
      </div>
      <button (click)="addSkill()" class="btn-primary">Add Skill</button>
    </section>
  `
})
export class SkillsComponent {
  @Input() skillsList!: Skill[];

  addSkill() {
    this.skillsList.push({
      name: '',
      level: 'Beginner'
    });
  }

  removeSkill(index: number) {
    this.skillsList.splice(index, 1);
  }
}