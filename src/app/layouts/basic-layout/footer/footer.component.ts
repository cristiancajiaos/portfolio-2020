import { SocialNetwork } from './../../../shared/interfaces/social-network';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentDate: Date;
  socialNetworks: SocialNetwork[];

  constructor() {}

  ngOnInit(): void {
    this.currentDate = new Date();

    this.socialNetworks = [
      {
        name: 'Sitio web',
        icon: 'fas fa-globe',
        url: 'https://cealcuadrado.github.io'
      },
      {
        name: 'Twitter',
        icon: 'fab fa-twitter',
        url: 'https://twitter.com/cristiancajiao',
      },
      {
        name: 'LinkedIn',
        icon: 'fab fa-linkedin',
        url: 'https://www.linkedin.com/in/cristiancajiaos',
      },
      {
        name: 'Codepen',
        icon: 'fab fa-codepen',
        url: 'https://codepen.io/cristiancajiaos',
      },
      {
        name: 'GitHub',
        icon: 'fab fa-github',
        url: 'https://github.com/cristiancajiaos',
      },
    ];
  }
}
