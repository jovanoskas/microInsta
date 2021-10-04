import { async, TestBed } from '@angular/core/testing';

import { EditComponent } from '../edit/edit.component';
import { PreloadService } from '../preload.service';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { apiServiceMock, httpClientMock } from '..//../tests/mockServices';
import { ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../snackbar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { mockData } from '..//../tests/mockData';

fdescribe('EditComponent', () => {
  interface Suite {
    apiService: jasmine.SpyObj<ApiService>;
    component: EditComponent;
    httpClient: jasmine.SpyObj<HttpClient>;
    preloadService: PreloadService
    route: ActivatedRoute;
  }

  const activatedRouteStub = {
    paramMap: {
      subscribe() {
        return of();
      }
    }
  };
  let suite: Suite = {} as any;
  let id: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditComponent],
      imports: [
        RouterTestingModule,
        MatSnackBarModule,
      ],
      providers: [
        FormBuilder,
        PreloadService,
        SnackbarService,
        {provide: ActivatedRoute, useClass: activatedRouteStub},
        {provide: ApiService, useValue: apiServiceMock},
        {provide: HttpClient, useValue: httpClientMock}
      ]
    })
      .compileComponents();
    suite.component = TestBed.createComponent(EditComponent).componentInstance;
    suite.apiService = TestBed.get(ApiService);
    suite.route = TestBed.get(ActivatedRoute);
    suite.preloadService = TestBed.get(PreloadService);
  }));

  function updateForm(id: number, albumId: number, title: string, url: string, thumbnailUrl: string) {
    suite.component.itemForm.controls['id'].setValue(id);
    suite.component.itemForm.controls['albumId'].setValue(albumId);
    suite.component.itemForm.controls['title'].setValue(title);
    suite.component.itemForm.controls['url'].setValue(url);
    suite.component.itemForm.controls['thumbnailUrl'].setValue(thumbnailUrl);
  }

  it('should create EditComponent', () => {
    suite.route.paramMap.subscribe(params => {
      id = parseInt(params.get('id'));
      spyOn(suite.preloadService, 'getItemById').withArgs(id).and.callFake(() => {
        return mockData.find(val => val.id = id);
      })
    })

    updateForm(1, 1, 'test', 'test', 'test');

    suite.component.ngOnInit();

    expect(suite.component).toBeTruthy();
  });
});