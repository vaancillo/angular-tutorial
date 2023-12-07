import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <ul>
      @for (game of games; track game.id) {
        <li>{{ game.title }}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  games = [
    {
      id: 1,
      title: 'The Legend of Zelda: Breath of the Wild',
      genre: 'Action-adventure',
      rating: 5
    },
    {
      id: 2,
      title: 'Super Mario Odyssey',
      genre: 'Platformer',
      rating: 5
    },
    {
      id: 3,
      title: 'Mario Kart 8 Deluxe',
      genre: 'Racing',
      rating: 4
    },
    {
      id: 4,
      title: 'Splatoon 2',
      genre: 'Third-person shooter',
      rating: 4
    },
    {
      id: 5,
      title: 'Super Mario Party',
      genre: 'Party',
      rating: 4
    },
    {
      id: 6,
      title: 'Pokémon: Let\'s Go, Pikachu! and Let\'s Go, Eevee!',
      genre: 'Role-playing',
      rating: 4
    },
    {
      id: 7,
      title: 'Super Smash Bros. Ultimate',
      genre: 'Fighting',
      rating: 5
    },
    {
      id: 8,
      title: 'New Super Mario Bros. U Deluxe',
      genre: 'Platformer',
      rating: 4
    },
    {
      id: 9,
      title: 'Mario Tennis Aces',
      genre: 'Sports',
      rating: 4
    },
    {
      id: 10,
      title: 'Kirby Star Allies',
      genre: 'Platformer',
      rating: 4
    }
  ]
}
