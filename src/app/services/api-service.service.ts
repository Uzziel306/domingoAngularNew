import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getCarts(): Observable<any> {
    return this.http.get(this.url)
  }
}
