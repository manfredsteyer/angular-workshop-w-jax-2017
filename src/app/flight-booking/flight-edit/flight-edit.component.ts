import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../flight-search/flight.service';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  id: string;
  showDetails: string;

  flight: Flight;
  errors: string;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.showDetails = params['showDetails'];

        this.flightService.findById(this.id).subscribe(
          flight => { this.flight = flight; this.errors = ''; },
          err => { this.errors = 'Fehler beim Laden'; }
        );
      }
    )
  }

  save() {
    this.flightService.save(this.flight).subscribe(
      flight => { this.flight = flight; this.errors = 'Save was successful!'; },
      err => { this.errors = 'Fehler beim Speichern'; }
    );
  }

}
