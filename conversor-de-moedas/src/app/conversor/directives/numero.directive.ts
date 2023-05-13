import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[numero]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumeroDirective,
    multi: true
  }]
})

export class NumeroDirective implements ControlValueAccessor {

  onTouched: any;
  onChange: any;

  constructor(private el: ElementRef) {}

  @HostListener('keyup', ['$event']) //quero que o evento seja executado sempre que eu pressionar uma tecla
  onKeyUp($event: any) {
    let valor = $event.target.value; //obter valor digitado
    let posDecimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, ''); //remover tudo que não for numero por um vazio

    if (posDecimais > 0) {
      valor = valor.substr(0, posDecimais) + '.' +
      valor.substr(posDecimais);
    }

    $event.target.value = valor;
    //this.onChange(valor);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }


}
