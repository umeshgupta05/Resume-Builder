import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ResumeFormComponent } from './app/components/resume-form/resume-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ResumeFormComponent],
  template: `<app-resume-form></app-resume-form>`
})
export class App {}

bootstrapApplication(App);