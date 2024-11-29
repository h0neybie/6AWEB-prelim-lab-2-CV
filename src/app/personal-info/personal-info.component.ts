import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {

  firstname: string = 'Abby';
  lastname: string = 'Dizon';
  email: string = 'dizonabbycruz@gmail.com';
  phone: string = '09669407251';
  position: string = 'I am a Passionate Web Developer';
  description: string = "With over 3 years of experience in the magical trio —HTML, CSS, and JavaScript— I build websites that not only look good but work like a charm. I’m passionate about crafting efficient and user-friendly websites. Always result-driven, I’m ready to join a team that’s as eager to grow and innovate as I am. Let's create something awesome together!";}


