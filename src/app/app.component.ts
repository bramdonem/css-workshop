import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'workshop-css';

  fireworks() {
    const container = document.querySelector('.container')
    const fireworks = new (window as any).Fireworks.default(container, { /* options */ })
    fireworks.start()
  }
}
