import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditComponent } from './edit/edit.component'
@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanDeactivate<EditComponent> {
  canDeactivate(component: EditComponent): Observable<boolean> | Promise<boolean> | boolean {
    if ( component.itemForm.dirty ) {
      const title = component.itemForm.get('title')!.value || 'New Product';
      return confirm(`Navigate away and lose all changes to ${title}?`);
    }
    return true;
  }
  
}
