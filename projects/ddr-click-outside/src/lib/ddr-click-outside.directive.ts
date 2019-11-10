import { Directive, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[ddrClickOutside]'
})
export class DdrClickOutsideDirective {

  @Input() clickOutsideEnabled: boolean = true;
  @Input() clickOutsideDelay: number;

  @Output() clickOutside = new EventEmitter<MouseEvent>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  public onDocumentClick(event: MouseEvent) {

    if (this.clickOutsideEnabled) {

      const target = event.target as HTMLElement;

      if (target && !this.elementRef.nativeElement.contains(target)) {

        if (this.clickOutsideDelay) {
          setTimeout(() => {
            this.clickOutside.emit(event);
          }, this.clickOutsideDelay);
        } else {
          this.clickOutside.emit(event);
        }


      }


    }


  }

}
