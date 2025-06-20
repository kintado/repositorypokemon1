import { Component } from '@angular/core';
import { RouterOutlet,  RouterModule } from '@angular/router';

@Component({
  selector: 'app-shell-component',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app-shell-component.html',
  styleUrl: './app-shell-component.css'
})
export class AppShellComponent {

}
