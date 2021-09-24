import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: IBook[] = [];
  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.service.getBooks().subscribe((data) => (this.books = data));
  }
  ping(data: IBook) {
    console.log(data);
  }
}
