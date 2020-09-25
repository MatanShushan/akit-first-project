import { Injectable } from '@angular/core';
import { LocalStorageKey } from '../app.enums';

@Injectable({ providedIn: 'root' })
export class LocalstorageService {

  constructor() {
  }
  saveItem(key: LocalStorageKey, item: string) {
    localStorage.setItem(key, item);
  }

  getItem(key: LocalStorageKey) {
    const lsItem = localStorage.getItem(key);
    if (!lsItem) {
      return null;
    }
    try {
      const parsedItem = JSON.parse(lsItem);
      if (parsedItem) {
        return parsedItem;
      }
    } catch {
      return lsItem;
    }

  }

}
