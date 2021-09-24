import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
})
export class BookPreviewComponent implements OnInit {
  @Input() book: IBook | undefined;
  @Output() bookselected = new EventEmitter<IBook>();
  @Output() foo = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  sendFoo() {
    this.foo.emit(787987);
  }
  selectThisBook(e: Event) {
    console.log(e);
    console.log((e.target as HTMLButtonElement).classList);

    this.bookselected.emit(this.book);
  }
}
