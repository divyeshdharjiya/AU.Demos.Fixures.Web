import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { Fixture } from '../models/fixture';

@Injectable({
  providedIn: 'root'
})
export class FixturesService {
  public stringSubject = new Subject<string>();
  constructor(private http: HttpClient) { }
  getFixtures(searchTerm: string): Observable<Fixture[]> {
    return this.http.get<Fixture[]>(`https://prem-fixtures.azurewebsites.net/api/Fixtures?searchTerm=${searchTerm}&count=1000&skip=0`);
  }

  passValue(data) {
    this.stringSubject.next(data);
  }
}
