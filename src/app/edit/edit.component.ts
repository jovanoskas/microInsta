import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PreloadService } from '../preload.service';
import { Photo } from '../photo';
import { ApiService } from '../api.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-form',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  itemForm!: FormGroup;
  id!: string;
  item!: Photo;

  constructor(private fb: FormBuilder,
              private snackbarService: SnackbarService,
              private api: PreloadService,
              private apiService: ApiService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(snapshot => {
      const id = snapshot.get('id');
      this.item = this.api.getItemById(+id!);
      this.itemForm = this.fb.group({
        id: [this.item.id, Validators.required],
        albumId: [this.item.albumId, Validators.required],
        title: [this.item.title, Validators.required],
        url: [this.item.url, Validators.required],
        thumbnailUrl: [this.item.thumbnailUrl, Validators.required]
      });
    });

  }

  submit() {

    this.apiService.updateItem(this.item.id, this.itemForm.value).subscribe(() => {
      this.itemForm.reset();
      this.router.navigateByUrl('/photos').then(() => {
        this.snackbarService.openSnackBar('Successfully Edited', 'EDIT');
      });
    }, error => {
      this.snackbarService.openSnackBar(error.message, 'ERROR');
    });
  }

}