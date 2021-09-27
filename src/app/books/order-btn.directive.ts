import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { IBook } from './book.interface';

@Directive({
  selector: '[appOrderBtn]',
})
export class OrderBtnDirective implements OnChanges {
  @Input() appOrderBtn: string;
  @Input() myBook: IBook;
  btn: HTMLButtonElement;

  constructor(private elem: ElementRef) {
    this.btn = elem.nativeElement;
    console.log(this.btn);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.btn.innerText = this.appOrderBtn;
    this.btn['routerLink'] = this.myBook.publisher;
  }
}
