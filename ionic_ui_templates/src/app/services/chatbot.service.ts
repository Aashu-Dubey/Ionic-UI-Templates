import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../dto/ResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(this.apiUrl + "nlp/chat",  message );
  }
}
