import { async, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { ApiService } from '../api.service';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SnackbarService } from '../snackbar.service';
import { Router } from '@angular/router';
import { routes } from '../app-routing.module';
import { HomeComponent } from '../home/home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let service: ApiService;
  let snackbarService: SnackbarService;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        HomeComponent
      ],
      providers: [
        HttpClientTestingModule
      ]
    })
    service = new ApiService(null);
    snackbarService = new SnackbarService(null);

    component = new CreateComponent(new FormBuilder(), router, snackbarService, service);
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});