export interface IPokemonListItem {
  name: string;
  isFavorite: boolean;
  url: string;
}

export interface IPokemon {
  height: number;
  weight: number;
  name: string;
  types: IPokemonType[];
  sprites: IPokemonSprite;
}

export interface IPokemonType {
  type: { name: string };
}

export interface IPokemonSprite {
  other: { "official-artwork": { front_default: string } };
}
