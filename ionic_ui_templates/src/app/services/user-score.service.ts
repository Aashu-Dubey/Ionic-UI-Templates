// src/app/services/user-score.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserScoreService {
  private apiUrl = 'http://localhost:3000/user-score';

  constructor(private http: HttpClient) {}

  getUserScore(userId: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/${userId}`);
  }
}
