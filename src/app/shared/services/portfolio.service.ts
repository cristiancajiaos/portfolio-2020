import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PortfolioElement } from '../interfaces/portfolio-element';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPortfolioElements(): Observable<PortfolioElement[]> {
    return this.http.get<PortfolioElement[]>('assets/data/portfolio.json');
  }

  getPortfolioElementById(id: number): Observable<PortfolioElement> {
    return this.getAllPortfolioElements().pipe(map(elements => elements.filter(element => element.id === id)[0]));
  }
}
