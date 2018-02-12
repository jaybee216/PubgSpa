import { Injectable } from '@angular/core';
import { Weapon } from './weapon';
import { WeaponClass } from './weapon-class';
import { WEAPONS, WEAPONCLASSES } from './mock-weapons';
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

  private weaponsUrl = 'api/weapons';
  private weaponClassesUrl = 'api/weaponClasses';

  getWeapons(): Observable<Weapon[]> {
    //return of(WEAPONS);
    return this.http.get<Weapon[]>(this.weaponsUrl)
      .pipe(
      tap(weapons => this.log('retrieved weapons')),
      catchError(this.handleError('getWeapons', []))
      );
  }

  getWeaponsByClass(weaponTypeId: number): Observable<Weapon[]> {
    //return of(WEAPONS);
    return this.http.get<Weapon[]>(`${this.weaponsUrl}?weaponTypeId=${weaponTypeId}`)
      .pipe(
      tap(weapons => this.log(`retrieved weapons for class id ${weaponTypeId}`)),
      catchError(this.handleError('getWeapons', []))
      );
  }

  getWeapon(id: number): Observable<Weapon> {
    //return of(WEAPONS.find(w => w.name === 'M16A4'));
    const url = `${this.weaponsUrl}/${id}`;
    return this.http.get<Weapon>(url).pipe(
      tap(_ => this.log(`retrieved weapon id=${id}`)),
      catchError(this.handleError<Weapon>(`getWeapon id=${id}`))
    );
  }

  getWeaponClasses(): Observable<WeaponClass[]> {
    //return of(WEAPONCLASSES);
    return this.http.get<WeaponClass[]>(this.weaponClassesUrl)
      .pipe(
      tap(classes => this.log('retrieved weapon classes')),
      catchError(this.handleError('getWeaponClasses', []))
      );
  }

  getWeaponClass(id: number): Observable<WeaponClass> {
    //return of(WEAPONCLASSES.find(c => c.name === 'AR'));
    return this.http.get<WeaponClass>(`${this.weaponClassesUrl}/${id}`)
      .pipe(
      tap(c => this.log(`retrieved weapon class ${id}`)),
      catchError(this.handleError<WeaponClass>(`getWeaponClass id=${id}`))
      );
  }

  private log(message: string) {
    this.messageService.log('WeaponService: ' + message);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
}
