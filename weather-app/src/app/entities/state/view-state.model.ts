import { ID, guid } from '@datorama/akita';
import { DegreeType, Theme } from 'src/app/app.enums';


export const DEFAULT_VIEW_STATE: ViewState = {
  id: guid(),
  theme: Theme.Light,
  degreeType: DegreeType.Celsius
}
export interface ViewState {
  id: ID;
  theme: Theme;
  degreeType: DegreeType;
}

/**
 * A factory function that creates ViewState
 */
export function createViewState(params: Partial<ViewState>) {
  return {
    id: guid(),
    theme: params.theme,
    degreeType: params.degreeType
  } as ViewState;
}
