import { Component } from '@angular/core';
import { RouterOutlet,  RouterModule } from '@angular/router';
import { AppShellComponent } from "./app-shell-component/app-shell-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, AppShellComponent],
  
  template: `<app-shell-component></app-shell-component>`,  styleUrl: './app.css'
})
export class App {
  protected title = 'rout1';
}
