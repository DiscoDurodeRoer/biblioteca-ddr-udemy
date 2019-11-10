import { Component, OnInit } from '@angular/core';
import { DdrToastService } from 'ddr-toast';
@Component({
  selector: 'app-showcase-ddr-toast',
  templateUrl: './showcase-ddr-toast.component.html',
  styleUrls: ['./showcase-ddr-toast.component.css']
})
export class ShowcaseDdrToastComponent implements OnInit {

  constructor(private toastService: DdrToastService) { }

  ngOnInit() {
  }

  addInfo() {
    this.toastService.addInfoMessage("titulo", "contenido")
  }
  addError() {
    this.toastService.addErrorMessage("titulo", "contenido")
  }
  addWarning() {
    this.toastService.addWarningMessage("titulo", "contenido")
  }
  addSuccess() {
    this.toastService.addSuccessMessage("titulo", "contenido")
  }


}
