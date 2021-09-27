import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit {
  name: string = '';
  keys: string[] = [];
  bookForm: FormGroup = this.builder.group({
    id: [''],
    title: ['', [Validators.required]],
    subtitle: [''],
    isbn: ['', [Validators.required, Validators.minLength(8)]],
    abstract: [''],
    author: [''],
    publisher: [''],
    price: [''],
    numPages: [0],
    cover: [''],
    userId: [0],
  });
  constructor(private builder: FormBuilder, private service: BookService) {}

  ngOnInit(): void {
    console.log(this.bookForm);
    this.keys = ['title', 'isbn']; // Object.keys(this.bookForm.controls);
    this.bookForm.controls.cover.valueChanges.subscribe((data) =>
      console.log(data)
    );
  }

  saveBook() {
    this.service.createBook(this.bookForm.value).subscribe(() => {
      this.bookForm.reset();

      console.log(this.bookForm);
    });
  }

  addControl() {
    // setTimeout(() => {
    //   this.bookForm.controls.cover.setValidators(Validators.required);
    //   this.bookForm.controls.cover.updateValueAndValidity();
    // }, 1500);

    this.bookForm.addControl(this.name, new FormControl(''));
    this.name = '';
    console.log(this.bookForm);
    // this.keys = Object.keys(this.bookForm.controls);
  }
}
