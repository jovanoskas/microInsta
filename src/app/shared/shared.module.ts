import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { PostDetailsComponent } from '../details/details.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { DialogComponent } from '../dialog/dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EditComponent } from '../edit/edit.component';
import { InputComponent } from '../input/input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from '../create/create.component';


@NgModule({
  declarations: [
    HomeComponent,
    PostDetailsComponent,
    DialogComponent,
    EditComponent,
    InputComponent,
    CreateComponent,


  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    OverlayModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule

  ],
  exports: [
    HomeComponent,
    PostDetailsComponent,
    MatToolbarModule,
    DialogComponent,
    EditComponent,
    InputComponent,
    MatFormFieldModule,
    MatInputModule,
    CreateComponent,
    MatIconModule,
    MatButtonModule,


  ],
  providers: []
})
export class SharedModule {
}