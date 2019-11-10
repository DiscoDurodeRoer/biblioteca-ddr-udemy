import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ddr-block-data-item',
  templateUrl: './ddr-block-data-item.component.html',
  styleUrls: ['./ddr-block-data-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DdrBlockDataItemComponent implements OnInit {

  @Input() label: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}
