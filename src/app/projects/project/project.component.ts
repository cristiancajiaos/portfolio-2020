import { PortfolioElement } from './../../shared/interfaces/portfolio-element';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioService } from 'src/app/shared/services/portfolio.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  id: number;
  element: PortfolioElement

  constructor(
    private activatedRoute: ActivatedRoute,
    private portfolio: PortfolioService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = parseInt(params.id);
      this.portfolio.getPortfolioElementById(this.id).subscribe(element => {
        this.element = element;
      });
    });
  }

  goBack(): void {
    this.location.back();
  }
}
