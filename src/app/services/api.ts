import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, catchError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://api.example.com';
constructor() { }

get<T>(endpoint: string, params?: any): Observable<T> {
  return this.http.get<any>(`${this.baseUrl}/${endpoint}`, { params }).pipe(
    map(response => {
      if (response && response.success) {
        return response.data as T;
      } else {
        // Server returned success: false
        throw new Error(response?.message || 'Failed to fetch data');
      }
    }),
    catchError((err) => {
      console.error('API call failed', err);
      throw new Error(err?.message || 'Unknown error occurred');
    })
  );
}
}

