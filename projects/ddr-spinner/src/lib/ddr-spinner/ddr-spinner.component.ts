import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DdrSpinnerService } from './ddr-spinner.service';

@Component({
  selector: 'ddr-spinner',
  templateUrl: './ddr-spinner.component.html',
  styleUrls: ['./ddr-spinner.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DdrSpinnerComponent implements OnInit {

  @Input() embedded: boolean

  constructor(public ddrSpinner: DdrSpinnerService) { }

  ngOnInit() {
  }

}
