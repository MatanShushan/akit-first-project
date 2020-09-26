import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ViewStateStore, ViewStateState } from './view-state.store';
import { ViewState } from './view-state.model';

@Injectable({
  providedIn: 'root'
})
export class ViewStateQuery extends QueryEntity<ViewStateState, ViewState> {

  constructor(protected store: ViewStateStore) {
    super(store);
  }

}
