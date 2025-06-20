import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Chisiamo } from './chisiamo/chisiamo';
import { Contatti } from './contatti/contatti';
import { Pikachu } from './pikachu/pikachu';
import { Bulbasaur } from './bulbasaur/bulbasaur';
import { Charmander } from './charmander/charmander';
import { Pichu } from './pichu/pichu';
import { Raichu } from './raichu/raichu';
import { General } from './general/general';

export const routes: Routes = [
  
    { path: '', component: Home, title: 'Home' },
    { path: 'about', component: Chisiamo, title: 'Chi siamo' },
    { path: 'contact', component: Contatti, title: 'Contatti' },
    
    { path: 'bulbasaur', component: Bulbasaur, title: 'Bulbasaur' },
    {
        path: 'charmander', component: Charmander, title: 'Charmander'
    },
    { path: 'pikachu', component: Pikachu, title: 'Pikachu' , children: [
                                                                            { path: 'pichu', component: Pichu, title: 'Pichu' },
                                                                    { path: 'raichu', component: Raichu, title: 'Raichu' }
                                                                        ]},
    { path: 'general', component: General, title: 'General', outlet: 'genout'} 
];
