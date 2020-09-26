import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { ViewState } from './view-state.model';

export interface ViewStateState extends EntityState<ViewState> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'viewState' })
export class ViewStateStore extends EntityStore<ViewStateState, ViewState> {

  constructor() {
    super();
  }

}

