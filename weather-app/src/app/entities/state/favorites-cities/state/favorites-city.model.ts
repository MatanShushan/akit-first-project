import { guid, ID } from '@datorama/akita';

export interface FavoritesCity {
  id: ID;
  apiKey: string;
  name: string;
}

/**
 * A factory function that creates FavoritesCities
 */
export function createFavoritesCity(params: Partial<FavoritesCity>) {
  return {
    apiKey: params.apiKey,
    name: params.name,
    id: guid()
  } as FavoritesCity;
}
