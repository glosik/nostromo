import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[nostromoAddClass]'
})
export class AddClassDirective {
  // Add open class used by Bootstrap
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
