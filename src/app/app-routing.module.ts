import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostDetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { EditGuard } from './edit.guard';
import { CreateGuard } from './create.guard';


export const routes: Routes = [
  {
    path: 'photos', component: HomeComponent,
  },
  {
    path: 'photos/:id', component: PostDetailsComponent
  },
  {
    path: 'photos/:id/edit',
    canDeactivate: [EditGuard],
    component: EditComponent
  },
  {
    path: 'create-item',
    canDeactivate: [CreateGuard],
    component: CreateComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'photos'
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}