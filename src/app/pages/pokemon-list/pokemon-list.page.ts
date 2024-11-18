import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

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

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    // En este caso, ya no cargamos los primeros 50 Pokémon al inicio.
  }

  // Función para buscar un Pokémon por nombre
  searchPokemon() {
    if (!this.searchQuery.trim()) {
      this.pokemonDetails = null; // Si no hay nombre, no mostrar detalles.
      return;
    }

    this.loading = true;
    this.pokemonService.getPokemonDetails(this.searchQuery.toLowerCase()).subscribe({
      next: (response) => {
        this.pokemonDetails = response; // Guardar los detalles del Pokémon
        this.errorMessage = '';         // Limpiar el mensaje de error
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching Pokémon details:', error);
        this.errorMessage = 'Pokémon no encontrado'; // Mostrar mensaje de error
        this.pokemonDetails = null; // Limpiar los detalles previos
        this.loading = false;
      },
    });
  }
}
