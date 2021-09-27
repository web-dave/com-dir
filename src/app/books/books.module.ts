import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { PagesPipe } from './pages.pipe';
import { OrderBtnDirective } from './order-btn.directive';
import { BookNewComponent } from './book-new/book-new.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookPreviewComponent,
    BookDetailsComponent,
    PagesPipe,
    OrderBtnDirective,
    BookNewComponent,
  ],
  exports: [BooksComponent],
  imports: [CommonModule, BooksRoutingModule, ReactiveFormsModule],
})
export class BooksModule {}
