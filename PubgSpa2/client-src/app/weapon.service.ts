import { Injectable } from '@angular/core';
import { Weapon } from './weapon';
import { WEAPONS } from './mock-weapons';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WeaponService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add('WeaponService: ' + message);
  }

  private weaponsUrl = 'api/weapons';

  getWeapons(): Observable<Weapon[]> {
    return this.http.get<Weapon[]>(this.weaponsUrl)
      .pipe(
        tap(weapons => this.log('retrieved weapons')),
        catchError(this.handleError('getWeapons', []))
      );
  }

  getWeapon(id: number): Observable<Weapon> {
    
    const url = `${this.weaponsUrl}/${id}`;
    return this.http.get<Weapon>(url).pipe(
      tap(_ => this.log(`retrieved weapon id=${id}`)),
      catchError(this.handleError<Weapon>(`getWeapon id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
}
