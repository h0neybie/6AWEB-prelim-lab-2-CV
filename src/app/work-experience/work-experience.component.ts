import { Component } from '@angular/core';
export interface  Work {
	 company: string;
   year: string;
   position: string;
}		

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {

  
  work: Work[] = [
	  {
      company: 'G-media and Co.',
      year: '2022 - Present',
      position: 'Script Writer and Voice Actress',
	  },
	  {
      company: 'G-media and Co.',
      year: '2022 - Present',
      position: 'Script Writer and Voice Actress',
	  },
	  {
      company: 'G-media and Co.',
      year: '2022 - Present',
      position: 'Script Writer and Voice Actress',
	  }
	 ];


}
