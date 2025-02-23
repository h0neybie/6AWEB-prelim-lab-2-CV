import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationComponent } from './education/education.component'
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { TrainingComponent } from './training/training.component';
import { ReferenceComponent } from './references/reference.component';
import { CertificationsComponent } from './skills-certifications/certifications.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonalInfoComponent, EducationComponent, WorkExperienceComponent, TrainingComponent, ReferenceComponent,CertificationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prelim_lab_2';

}

export interface Education {
	school: string;
	level: string;
	year: string;
	address: string;
}		
