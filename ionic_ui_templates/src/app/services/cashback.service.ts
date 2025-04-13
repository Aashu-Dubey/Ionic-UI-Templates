import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CashbackService {
  private apiUrl = 'https://api.example.com/cashback';

  constructor(private http: HttpClient) {}

  getCashbackOffers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
