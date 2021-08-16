import { IPokemonListItem } from "@/schema/types";
import request from "../api";

enum PokemonPaths {
  list = "/",
}

export interface GetPokemonsApiParams {
  limit: string;
  next?: string;
}

export interface GetSinglePokemonApiParams {
  url: string;
}

export async function getPokemonsApi(params: GetPokemonsApiParams) {
  const query = `?limit=${params.limit}`;

  let res = undefined;
  if (params.next) {
    res = await request.get(params.next, { baseURL: "" });
    return res.data;
  }
  res = await request.get(PokemonPaths.list + query);
  res.data.results.forEach((pokemon: IPokemonListItem) => {
    pokemon.isFavorite = false;
  });
  return res.data.results;
}

export async function getSinglePokemonApi(params: GetSinglePokemonApiParams) {
  const res = await request.get(params.url, { baseURL: "" });
  return res.data;
}
