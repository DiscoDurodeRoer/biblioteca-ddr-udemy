import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-detail',
  templateUrl: './showcase-ddr-detail.component.html',
  styleUrls: ['./showcase-ddr-detail.component.css']
})
export class ShowcaseDdrDetailComponent implements OnInit {

  public showDetail: boolean;

  constructor() {
    this.showDetail = false;
  }

  ngOnInit() {
  }

  openDetail() {
    this.showDetail = true;
  }

  closeDetail() {
    this.showDetail = false;
  }

}
