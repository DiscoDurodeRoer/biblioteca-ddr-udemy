import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-join-pipe',
  templateUrl: './showcase-ddr-join-pipe.component.html',
  styleUrls: ['./showcase-ddr-join-pipe.component.css']
})
export class ShowcaseDdrJoinPipeComponent implements OnInit {

  valoresNulo = null;
  valores: string[];

  constructor() {
    this.valores = [
      "valor1",
      "valor2",
      "valor3",
      "valor4",
      "valor5"
    ]

  }

  ngOnInit() {
  }

}
