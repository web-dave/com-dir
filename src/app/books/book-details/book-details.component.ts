import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from '../book.interface';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book: IBook;

  zahl = 625146;
  constructor(private route: ActivatedRoute, private service: BookService) {}

  ngOnInit(): void {
    console.log(this.route);

    // setInterval(() => {
    //   this.zahl = 7;
    // }, 1500);
    this.service.getBook(this.route.snapshot.params.isbn).subscribe((data) => {
      this.book = data;
    });
  }
  transform(value: number, arg: string = 'number of pages'): string {
    console.log('Methode');
    return `${arg}: ${value}`;
  }
}
