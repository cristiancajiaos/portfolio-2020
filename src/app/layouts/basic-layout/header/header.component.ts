import { Component, OnInit } from '@angular/core';
import { SocialNetwork } from 'src/app/shared/interfaces/social-network';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuCollapsed: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isMenuCollapsed = true;
  }

  toggleCollapse(): void {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }

  setCollapsedTrue(): void {
    this.isMenuCollapsed = true;
  }
}
