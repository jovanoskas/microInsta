import { Injectable } from '@angular/core';
import { Photo } from './photo';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PreloadService {
  items!: Photo[];

  constructor(private api: ApiService) {
  }

  public getItems(): Photo[] {
    return this.items;
  }

  public getItemById(id: number): Photo {
    return this.items.find(item => item.id === id)!;
  }

  load() {
    return new Promise((resolve) => {
      this.api.getItems().subscribe(items => {
        this.items = items;
        resolve(true);
      });
    });
  }
}