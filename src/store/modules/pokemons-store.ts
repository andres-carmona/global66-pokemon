import {
  getPokemonsApi,
  GetPokemonsApiParams,
  getSinglePokemonApi,
  GetSinglePokemonApiParams,
} from "@/api/pokemon-requests";
import { IPokemonListItem } from "@/schema/types";
import { ActionsTypes } from "../actions";
import { MutationsTypes } from "../mutations";
import { StateList } from "../types";
import { handleResponse } from "../utils";

const state = (): StateList => ({
  data: [],
  filter: "all",
  query: "",
  error: undefined,
  loading: false,
});

const getters = {
  allItems: (state: StateList): IPokemonListItem[] => {
    if (state.query === "") {
      return state.data;
    }
    return state.data.filter((d) => d.name.match(new RegExp(state.query)));
  },
  allFavorites: (state: StateList): IPokemonListItem[] =>
    state.data.filter((item) => item.isFavorite),
  filter: (state: StateList): string => state.filter,
  loading: (state: StateList): boolean => state.loading,
};

const mutations = {
  [MutationsTypes.SET_POKEMONS]: (state: StateList, payload: StateList) => {
    state.data = payload.data;
    state.error = payload.error;
    state.loading = payload.loading;
  },
  [MutationsTypes.SET_FAVORITE]: (state: StateList, payload: IPokemonListItem) => {
    state.data = state.data.map((item) =>
      item.name == payload.name ? { ...item, isFavorite: !payload.isFavorite } : item
    );
  },
  [MutationsTypes.SET_FILTER]: (state: StateList, filter: string) => {
    state.filter = filter;
  },
  [MutationsTypes.SET_QUERY]: (state: StateList, query: string) => {
    state.query = query;
  },
};

const actions = {
  [ActionsTypes.GET_POKEMONS]: ({ commit }: any, params: GetPokemonsApiParams) => {
    handleResponse<IPokemonListItem[]>(commit, {
      service: () => getPokemonsApi(params),
      mutationName: MutationsTypes.SET_POKEMONS,
      defaultData: [],
    });
  },
  [ActionsTypes.GET_SINGLE_POKEMON]: ({ commit }: any, params: GetSinglePokemonApiParams) => {
    return getSinglePokemonApi(params);
  },
  [ActionsTypes.SET_FAVORITE]: ({ commit }: any, params: GetPokemonsApiParams) => {
    commit(MutationsTypes.SET_FAVORITE, params);
  },
  [ActionsTypes.SET_FILTER]: ({ commit }: any, filter: string) => {
    commit(MutationsTypes.SET_FILTER, filter);
  },
  [ActionsTypes.SET_QUERY]: ({ commit }: any, query: string) => {
    commit(MutationsTypes.SET_QUERY, query);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
