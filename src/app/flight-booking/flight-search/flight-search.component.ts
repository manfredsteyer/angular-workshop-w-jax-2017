import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  // providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {

  from: string = "Hamburg";
  to: string = "Graz";
  // flights: Array<Flight> = [];

  get flights() {
    return this.flightService.flights;
  }

  selectedFlight: Flight;

  basket: object = {
    "3": true,
    "4": false,
    "5": true
  };

  // private http: HttpClient;
  constructor(
    private flightService: FlightService) {
    // this.http = http;
    console.debug('Liebesgrüße aus dem Konstruktor');
  }

  ngOnInit() {
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

  search(): void {
    this.flightService.load(this.from, this.to);
    // this.flightService.flights;
  }

}
