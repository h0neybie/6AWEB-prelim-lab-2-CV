import { Component } from '@angular/core';
export interface Education {
	school: string;
	level: string;
	year: string;
	address: string;
}		


@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  
  education: Education[] = [
	  {
		school: 'Holy Rosary Academy',
		level: 'Elementary',
		year: '2010 - 2016',
		address: 'San Nicolas 1st Lubao, Pampanga',
	  },
	  {
		school: 'Holy Rosary Academy',
		level: 'Junior and Senior High School',
		year: '2016 - 2022',
		address: 'San Nicolas 1st Lubao, Pampanga',
	  },
	  {
		school: 'Holy Angel University',
		level: 'College',
		year: '2022 - Present',
		address: '#1 Holy Angel St. Angeles City, Pampanga',
	  }
	 ];

}
