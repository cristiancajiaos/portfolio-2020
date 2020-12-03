import { PortfolioElement } from './../shared/interfaces/portfolio-element';
import { PortfolioService } from './../shared/services/portfolio.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  portfolioElements: PortfolioElement[];

  constructor(
    private portfolio: PortfolioService
  ) { }

  ngOnInit(): void {
    this.portfolio.getAllPortfolioElements().subscribe(elements => {
      this.portfolioElements = elements;
    });
  }

}
