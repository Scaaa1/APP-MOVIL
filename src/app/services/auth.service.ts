import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authorizedUsers: { run: string, password: string }[] = [
    { run: '11.111.111-1', password: '1234' },
    { run: '18.765.753-9', password: '2222' }
  ];

  constructor(private http: HttpClient) { }

  authenticate(run: string, password: string): Observable<boolean> {
    // Verifica credenciales
    const isAuthorized = this.authorizedUsers.some(user => user.run === run && user.password === password);
    
    return of(isAuthorized);
  }
}
