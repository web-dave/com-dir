import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BookNewComponent } from './book-new/book-new.component';

@Injectable({
  providedIn: 'root',
})
export class LeaveGuard implements CanDeactivate<BookNewComponent> {
  canDeactivate(
    component: BookNewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log(currentRoute, currentState, nextState);
    return component.bookForm.pristine || confirm('AAAAAAA');
  }
}
