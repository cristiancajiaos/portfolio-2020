import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-up-icon',
  templateUrl: './up-icon.component.html',
  styleUrls: ['./up-icon.component.scss']
})
export class UpIconComponent implements OnInit {

  @Output() scrollTop = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
  }

  scroll(): void {
    this.scrollTop.emit(true);
  }

}
