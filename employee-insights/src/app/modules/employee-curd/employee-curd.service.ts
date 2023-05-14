import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { API_URL } from 'src/app/shared/constants/api-url.constant';
import { EMPLOYEE } from 'src/app/shared/models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCurdService {

  constructor(private http: HttpClient) { }

  //http Options
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    }),
  };

  //Error Handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  };

  getAllEmployee(): Observable<string[]> {
    return this.http.get<string[]>(API_URL.employee).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getEmployeeById(employeeId: number): Observable<EMPLOYEE[]> {
    return this.http.get<EMPLOYEE[]>(API_URL.employee + "/" + employeeId).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  addEmployee(employee: EMPLOYEE): Observable<EMPLOYEE> {
    return this.http.post<EMPLOYEE>(API_URL.employee, employee).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  updateEmployee(id: number, employee: EMPLOYEE): Observable<EMPLOYEE> {
    return this.http.put<EMPLOYEE>(API_URL.employee + "/" + id, employee, this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  deleteEmployee(id: number): Observable<EMPLOYEE> {
    return this.http.delete<EMPLOYEE>(API_URL.employee + "/" + id, this.httpOptions).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
}
