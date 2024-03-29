import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private snackbarService: SnackbarService,
              private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: ['', Validators.required],
      url: ['', Validators.required],
      thumbnailUrl: ['', Validators.required]
    });
  }

  create() {
    this.apiService.createItem(this.createForm.value).subscribe(() => {
      this.createForm.reset();
      this.router.navigateByUrl('/photos').then(() => {
        this.snackbarService.openSnackBar('Successfully Created', 'CREATE');
      });
    }, error => {
      this.snackbarService.openSnackBar(error.message, 'ERROR');
    });
  }

}