import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {
  searchQuery: string = '';        // Texto de búsqueda
  pokemonDetails: any = null;      // Detalles del Pokémon
  loading = false;                 // Indicador de carga
  errorMessage: string = '';       // Mensaje de error
  pokemons: any[] = [];            // Lista de Pokémon
  filteredPokemons: any[] = [];    // Pokémon filtrados para búsqueda

  constructor(
    private pokemonService: PokemonService,
    private favoritesService: FavoritesService
  ) {}

  ngOnInit() {
    this.fetchPokemons(); // Cargar lista de Pokémon al iniciar
  }

  // Función para buscar Pokémon por nombre
  searchPokemon() {
    if (!this.searchQuery.trim()) {
      this.pokemonDetails = null; // Si no hay texto de búsqueda, limpiar detalles
      this.filteredPokemons = this.pokemons; // Mostrar todos los Pokémon
      return;
    }

    this.loading = true;
    this.pokemonService.getPokemonDetails(this.searchQuery.toLowerCase()).subscribe({
      next: (response) => {
        this.pokemonDetails = response; // Mostrar detalles del Pokémon encontrado
        this.errorMessage = '';         // Limpiar el mensaje de error
        this.filteredPokemons = [];     // Ocultar lista al mostrar detalles
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching Pokémon details:', error);
        this.errorMessage = 'Pokémon no encontrado'; // Mostrar error
        this.pokemonDetails = null; // Limpiar los detalles previos
        this.loading = false;
      },
    });
  }

  // Cargar lista de Pokémon
  fetchPokemons() {
    this.loading = true;
    this.pokemonService.getPokemons(50).subscribe({
      next: (response) => {
        this.pokemons = response.results;
        this.filteredPokemons = [...this.pokemons]; // Inicializar filtrados con todos los Pokémon
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching Pokémon list:', error);
        this.loading = false;
      },
    });
  }

  // Verificar si un Pokémon está en favoritos
  isFavorite(pokemon: any): boolean {
    return this.favoritesService.isFavorite(pokemon.name);
  }

  // Añadir Pokémon a favoritos
  addToFavorites(pokemon: any) {
    this.favoritesService.addFavorite(pokemon);
  }

  // Eliminar Pokémon de favoritos
  removeFromFavorites(pokemon: any) {
    this.favoritesService.removeFavorite(pokemon.name);
  }

  // Obtener color para las barras de estadísticas
  getStatColor(statName: string): string {
    switch (statName) {
      case 'hp':
        return 'danger'; // Rojo para HP
      case 'attack':
        return 'primary'; // Azul para Ataque
      case 'defense':
        return 'secondary'; // Gris para Defensa
      case 'special-attack':
        return 'tertiary'; // Amarillo para Ataque Especial
      case 'special-defense':
        return 'success'; // Verde para Defensa Especial
      case 'speed':
        return 'warning'; // Naranja para Velocidad
      default:
        return 'medium'; // Gris por defecto
    }
  }
}
