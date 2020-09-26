import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { ViewStateStore } from './view-state.store';
import { DEFAULT_VIEW_STATE, ViewState } from './view-state.model';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { LocalStorageKey } from 'src/app/app.enums';

@Injectable({ providedIn: 'root' })
export class ViewStateService {

  constructor(private viewStateStore: ViewStateStore,
    private localstorageService: LocalstorageService,
    private http: HttpClient) {
  }

  get() {
    const view: ViewState = this.localstorageService.getItem(LocalStorageKey.ViewState);
    if (view) {
      this.add(view);
    } else {
      this.add(DEFAULT_VIEW_STATE);
    }
  }

  getCurrentView() {
    const values = this.viewStateStore.getValue();
    if (values && values.entities) {
      return Object.values(this.viewStateStore.getValue().entities)[0];
    }
  }

  add(viewState: ViewState) {

    this.removeAll();
    this.viewStateStore.add(viewState);
  }

  private removeAll() {
    this.viewStateStore.reset();
  }

  update(id, viewState: Partial<ViewState>) {
    this.viewStateStore.update(id, viewState);
    this.localstorageService.saveItem(LocalStorageKey.ViewState, JSON.stringify(viewState));

  }

  remove(id: ID) {
    this.viewStateStore.remove(id);
  }
}
