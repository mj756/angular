import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map, catchError, of } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { LoaderService } from "./custom_loader";
import { ToastService } from "./toast";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly loader = inject(LoaderService);
  private readonly snackBar=inject(ToastService);

  constructor() {}

  get<T>(
    endpoint: string,
    params?: any,
    showLoader: boolean = false
  ): Observable<T> {
    return this.http.get<any>(endpoint, { params }).pipe(
      map((response) => {
        if (response && response.success) {
          return response.data as T;
        } else {
          // Server returned success: false
          throw new Error(response?.message || "Failed to fetch data");
        }
      }),
      catchError((err) => {
        console.error("API call failed", err);
        throw new Error(err?.message || "Unknown error occurred");
      })
    );
  }
  post<T>(
    endpoint: string,
    params?: any,
    showLoader: boolean = true
  ): Observable<T> {
    if (showLoader) this.loader.show();
    return this.http.post<any>(endpoint, { params }).pipe(
      map((response) => {
         if (showLoader) this.loader.hide();
         if (response && response.status == 20) {
           this.snackBar.success("Success");
           return response.data as T;
         } else {
           this.snackBar.error(response?.message || "Failed to post data");
           return {} as T;
         }
      }),
      catchError((err) => {
         if (showLoader) this.loader.hide();
         this.snackBar.error(err?.message || "Unknown error occurred");
         return of({} as T);
      })
    );
  }
}
