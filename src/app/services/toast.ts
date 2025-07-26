import { inject, Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class ToastService {
  private readonly snackBar=inject(MatSnackBar);
  

  show(message: string, duration: number = 3000, action: string = "Close") {
    this.snackBar.open(message, action, {
      duration,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }

  success(msg: string) {
    this.show(msg);
  }

  error(msg: string) {
    this.show(msg, 4000);
  }
}
