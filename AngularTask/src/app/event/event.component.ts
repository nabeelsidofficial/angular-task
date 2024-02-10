import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  test: string | undefined;
  count: number = 0;

  fun(): void {
    this.test = 'You are my hero!';
    this.count++;
    alert('Test message :'+this.test+' Count :'+this.count);
  }
}
