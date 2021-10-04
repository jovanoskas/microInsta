import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateComponent } from './create/create.component'
@Injectable({
  providedIn: 'root'
})
export class CreateGuard implements CanDeactivate<CreateComponent> {
  canDeactivate(component: CreateComponent): Observable<boolean> | Promise<boolean> | boolean {
    if ( component.createForm.dirty ) {
      const title = component.createForm.get('title')!.value || 'New Product';
      return confirm(`Navigate away and lose all changes to ${title}?`);
    }
    return true;
  }
}
