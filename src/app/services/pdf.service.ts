import { Injectable } from '@angular/core';
import { Resume } from '../models/resume.model';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  async generatePDF(resume: Resume) {
    const pdf = new jsPDF();
    
    // Personal Info
    pdf.setFontSize(20);
    pdf.text(resume.personalInfo.fullName, 20, 20);
    
    pdf.setFontSize(10);
    pdf.text([
      resume.personalInfo.email,
      resume.personalInfo.phone,
      resume.personalInfo.address,
      resume.personalInfo.linkedIn || ''
    ], 20, 30);

    // Education
    pdf.setFontSize(16);
    pdf.text('Education', 20, 60);
    
    let yPos = 70;
    resume.education.forEach(edu => {
      pdf.setFontSize(12);
      pdf.text(`${edu.degree} - ${edu.institution}`, 20, yPos);
      pdf.setFontSize(10);
      pdf.text(`${edu.year}${edu.gpa ? ` | GPA: ${edu.gpa}` : ''}`, 20, yPos + 5);
      yPos += 15;
    });

    // Experience
    pdf.setFontSize(16);
    yPos += 10;
    pdf.text('Experience', 20, yPos);
    
    resume.experience.forEach(exp => {
      yPos += 10;
      pdf.setFontSize(12);
      pdf.text(`${exp.position} at ${exp.company}`, 20, yPos);
      pdf.setFontSize(10);
      pdf.text(`${exp.startDate} - ${exp.endDate}`, 20, yPos + 5);
      
      yPos += 10;
      exp.description.forEach(desc => {
        pdf.text(`• ${desc}`, 25, yPos);
        yPos += 5;
      });
      yPos += 5;
    });

    // Skills
    pdf.setFontSize(16);
    yPos += 10;
    pdf.text('Skills', 20, yPos);
    
    yPos += 10;
    pdf.setFontSize(10);
    resume.skills.forEach(skill => {
      pdf.text(`• ${skill.name} (${skill.level})`, 25, yPos);
      yPos += 5;
    });

    pdf.save('resume.pdf');
  }
}