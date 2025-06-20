import { Component } from '@angular/core';
import { RouterOutlet,  RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  template: `<div class="container">
  <h1>I MIEI POKEMON</h1>
  <router-outlet name="genout"></router-outlet>
  <div class="row">
    <div class="col">
      <h2>Pikachu</h2>
      <p><a routerLink="/pikachu">Dettagli...</a></p>
    </div>
    <div class="col">
      <h2>Bulbasaur</h2>
      <p><a routerLink="/bulbasaur">Dettagli...</a></p>
    </div>
    <div class="col">
      <h2>Charmander</h2>
      <p><a routerLink="/charmander">Dettagli...</a></p>
    </div>
  </div>
  <div>
    <router-outlet />
    <button (click)="vai()">VAI</button>

  </div>
  <a [routerLink]="[{outlets: { genout: ['general']}}]">GENERAL</a>

</div>`,  styleUrl: './app.css'
})
export class App {
  protected title = 'rout1';

  constructor(private router: Router) {
  
  }

  vai() {
    //this.router.navigate(['/pikachu']);
    this.router.navigate([{outlets: { genout: ['general']}}]);
  }
}
