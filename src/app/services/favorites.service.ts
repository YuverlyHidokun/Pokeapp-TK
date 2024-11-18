import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritesKey = 'pokemon_favorites';

  constructor() {}

  getFavorites(): any[] {
    const favorites = localStorage.getItem(this.favoritesKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  addFavorite(pokemon: any) {
    const favorites = this.getFavorites();
    if (!favorites.find((fav: any) => fav.name === pokemon.name)) {
      favorites.push(pokemon);
      localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    }
  }

  removeFavorite(name: string) {
    const favorites = this.getFavorites().filter((fav: any) => fav.name !== name);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }

  isFavorite(name: string): boolean {
    return !!this.getFavorites().find((fav: any) => fav.name === name);
  }
}
