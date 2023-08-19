import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  htmlElement: ElementRef<HTMLElement>;

  private _color: string = 'red';
  private _message: string = 'Este campo es requerido';
  private _valid: boolean = false;

  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  }

  @Input() set message(valor: string) {
    this._message = valor;
    this.setMessage();
  };

  @Input() set valid(valor: boolean) {
    if( valor === true ) {
      this.htmlElement.nativeElement.classList.add('hidden');
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  };

  constructor( private el: ElementRef<HTMLElement> ) { 
    this.htmlElement = el;
  }
  ngOnInit(): void {
    this.setColor();
    this.setMessage();
    this.setEstilo();
  }

  setEstilo(){
    this.htmlElement.nativeElement.classList.add('form-text');
  }

   setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this._message;
  } 
}
