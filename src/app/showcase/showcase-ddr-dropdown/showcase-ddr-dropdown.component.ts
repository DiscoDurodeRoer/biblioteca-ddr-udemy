import { DdrSelectItem } from 'ddr-dropdown';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-dropdown',
  templateUrl: './showcase-ddr-dropdown.component.html',
  styleUrls: ['./showcase-ddr-dropdown.component.css']
})
export class ShowcaseDdrDropdownComponent implements OnInit {

  options: DdrSelectItem[];
  valueSelect: string;

  constructor() { }

  ngOnInit() {

    this.options = [
      new DdrSelectItem('Label1', 'Value1'),
      new DdrSelectItem('Label2', 'Value2'),
      new DdrSelectItem('Label3', 'Value3'),
      new DdrSelectItem('Label4', 'Value4')
    ]

    this.valueSelect = 'Value3';
  }

  selectItem($event){
    console.log($event);
  }

}
