import { Component } from '@angular/core';
import { CertificationsComponent } from '../skills-certifications/certifications.component';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CertificationsComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {

}
