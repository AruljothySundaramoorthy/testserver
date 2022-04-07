import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { first, map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<any> {
    return this.http.get('http://15.206.153.19:3000/employees').pipe(first(), map((data: any) => data))
  }
}
