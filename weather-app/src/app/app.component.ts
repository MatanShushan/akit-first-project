import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ViewStateService } from './entities/state/view-state.service';
import { ViewStateQuery } from './entities/state/view-state.query';
import { ViewState } from './entities/state/view-state.model';
import { ToastrService } from 'ngx-toastr';
import { Theme } from './app.enums';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  currentViewState: ViewState;
  constructor(private viewStateService: ViewStateService, private viewStateQuery: ViewStateQuery) {

  }
  ngOnInit(): void {
    this.viewStateService.get();
    this.viewStateQuery.selectFirst().subscribe((item) => {
      if (item) {
        let changeNeeded = false;
        if (this.currentViewState) {
          if (this.currentViewState.theme !== item.theme) {
            changeNeeded = true;
          }
        }
        this.currentViewState = item;
        if (changeNeeded) {
          this.setThemeColors()

        }
      }
    })

  }

  setThemeColors() {
    let root = document.documentElement;
    if (this.currentViewState.theme === Theme.Light) {
      root.style.setProperty('--siteBackgroundColor', '#dfe3ee');
    } else {
      root.style.setProperty('--siteBackgroundColor', '#3C4043');
    }

  }
}
