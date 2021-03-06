import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Flight } from '../../entities/flight';

@Injectable()
export class FlightService {
  constructor(private http: HttpClient) {}

  flights: Flight[] = [];

  load(from: string, to: string): void {
    this.find(from, to).subscribe(
      flights => this.flights = flights,
      err => console.error('Fehler beim Laden!')
    );
  }

  find(from: string, to: string): Observable<Flight[]> {
    const url = 'http://www.angular.at/api/flight';
    const params = new HttpParams().set('from', from).set('to', to);
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Flight[]>(url, { params, headers});
  }

  findById(id: string): Observable<Flight> {
    const url = 'http://www.angular.at/api/flight';
    const params = new HttpParams().set('id', id);
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Flight>(url, { params, headers});
  }

  save(f: Flight): Observable<Flight> {
    const url = 'http://www.angular.at/api/flight';
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.post<Flight>(url, f, { headers});
  }

}
