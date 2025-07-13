import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    students = [
    { name: 'רותם', age: 18, active: true },
    { name: 'נועה', age: 17, active: false },
    { name: 'אורי', age: 18, active: true },
    { name: 'דנה', age: 17, active: false }
  ];
}
