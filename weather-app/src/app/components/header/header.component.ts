import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLightThemeActive: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.isLightThemeActive = !this.isLightThemeActive;
  }
}
