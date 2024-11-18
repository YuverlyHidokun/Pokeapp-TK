import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {
  pokemons: any[] = [];
  loading = false;

  constructor(
    private pokemonService: PokemonService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    this.loading = true;
    this.pokemonService.getPokemons(50).subscribe({
      next: (response) => {
        this.pokemons = response.results;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching Pokémon:', error);
        this.loading = false;
      },
    });
  }

  isFavorite(pokemon: any): boolean {
    return this.favoritesService.isFavorite(pokemon.name);
  }

  addToFavorites(pokemon: any) {
    this.favoritesService.addFavorite(pokemon);
  }


  removeFromFavorites(pokemon: any) {
    this.favoritesService.removeFavorite(pokemon.name);
  }
}
