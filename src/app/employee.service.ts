import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  public url = 'http://localhost:3000/Employee';

  constructor(private http: HttpClient) {}

  postData(obj: any): Observable<Employee> {
    return this.http.post(this.url, obj).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getData(): Observable<Employee> {
    return this.http.get(this.url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  putData(obj: any, id: number): Observable<Employee> {
    return this.http.put('http://localhost:3000/Employee/' + id, obj).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deletData(id: any): Observable<Employee> {
    return this.http.delete(`${this.url}/` + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
