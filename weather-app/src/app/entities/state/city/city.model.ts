import { ID } from '@datorama/akita';

export interface City {
  id: ID;
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: { ID: string, LocalizedName: string };
  AdministrativeArea: { ID: string, LocalizedName: string };
}
