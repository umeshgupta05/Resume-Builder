import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Resume } from '../../models/resume.model';
import { PersonalInfoComponent } from '../sections/personal-info/personal-info.component';
import { EducationComponent } from '../sections/education/education.component';
import { ExperienceComponent } from '../sections/experience/experience.component';
import { SkillsComponent } from '../sections/skills/skills.component';
import { PdfService } from '../../services/pdf.service';

@Component({
  selector: 'app-resume-form',
  standalone: true,
  imports: [
    CommonModule,
    PersonalInfoComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent
  ],
  template: `
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-6">Resume Builder</h1>
      
      <app-personal-info [info]="resume.personalInfo"></app-personal-info>
      <app-education [educationList]="resume.education"></app-education>
      <app-experience [experienceList]="resume.experience"></app-experience>
      <app-skills [skillsList]="resume.skills"></app-skills>

      <button (click)="generateResume()" class="btn-success">Generate Resume PDF</button>
    </div>
  `
})
export class ResumeFormComponent {
  resume: Resume = {
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      linkedIn: ''
    },
    education: [],
    experience: [],
    skills: []
  };

  constructor(private pdfService: PdfService) {}

  generateResume() {
    this.pdfService.generatePDF(this.resume);
  }
}