import {trigger, state, style, transition, animate} from '@angular/animations';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DdrToastService } from './ddr-toast.service';

@Component({
  selector: 'ddr-toast',
  templateUrl: './ddr-toast.component.html',
  styleUrls: ['./ddr-toast.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('overlayAnimation', [
      state('void', style({
        transform: 'translateY(5%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('void => visible', animate('225ms ease-out')),
      transition('visible => void', animate('195ms ease-in')),
    ])
  ]
})
export class DdrToastComponent implements OnInit {

  @Input() timeOut: number;

  constructor(public toastService: DdrToastService) { }

  ngOnInit() {

    if (this.timeOut) {
      this.toastService.timeOut = this.timeOut;
    }

  }

}
