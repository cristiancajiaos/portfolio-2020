import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.scss']
})
export class BasicLayoutComponent implements OnInit {

  public showUpIcon: boolean;
  private currentScrollY: number;

  constructor(
    private window: Window
  ) { }

  ngOnInit(): void {
    this.onScroll();
  }

  onScroll(event?: any): void {
    this.currentScrollY = window.scrollY;
    this.showUpIcon = this.currentScrollY >= 50 ? true : false;
  }

  scrollTop(scroll: boolean): void {
    this.window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
