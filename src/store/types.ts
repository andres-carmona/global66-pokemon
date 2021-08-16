import { IPokemonListItem } from "../schema/types";

export interface StateList {
  data: IPokemonListItem[];
  filter: string;
  query: string;
  error: any | undefined;
  loading: boolean;
}
