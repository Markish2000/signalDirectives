// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

// Libraries
import { Observable, map, tap } from 'rxjs';

// Interfaces
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);
  private baseUrl = 'https://reqres.in/api/users';

  public getUserById(id: number): Observable<User> {
    const url = `${this.baseUrl}/${id}`;

    return this.http.get<SingleUserResponse>(url).pipe(
      map((response) => response.data),
      tap(console.log)
    );
  }
}
