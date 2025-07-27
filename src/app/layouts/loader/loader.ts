import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderService } from 'src/app/services/custom_loader';

@Component({
  selector: "app-loader",
  template: `
    <div class="loader-overlay" *ngIf="show">
      <div class="spinner"></div>
    </div>
  `,
  styleUrls: ["./loader.scss"],
  imports: [CommonModule],
  standalone: true,
})
export class Loader {
  show: boolean = false;
  private loaderService = inject(LoaderService);

  constructor() {
    this.loaderService.loaderState$.subscribe((visible) => {
      this.show = visible;
    });
  }
}
