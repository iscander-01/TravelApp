import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RestService } from '@core/services';
import { routes } from '@core/core.consts';
import { TripModel,ITripModelResponse } from '@shared/models';
import { AppSettings } from '@shared/app.settings';

@Component({
  selector: 'app-trip-page',
  templateUrl: './trip-page.component.html',
  styleUrls: ['./trip-page.component.css']
})
export class TripPageComponent implements OnInit {

  trips = [];

  constructor(
    private restService: RestService, 
    private tripModel: TripModel, 
    private appSettings: AppSettings) { }

    //TODO: url builder
  deleteTrip(docId, docRev): void {
    this.restService.delete('/' + `${this.appSettings.CLOUDANT_DB_NAME}` + '/' + `${docId}` + '?rev=' + `${docRev}`).subscribe(data => {
      console.log('Delete success check');
    });
  }

  ngOnInit(): void {
    this.restService.get('/' + `${this.appSettings.CLOUDANT_DB_NAME}` + 
      '/_design/' + `${this.appSettings.CLOUDANT_VIEW_DESIGN}` + 
      '/_view/' + `${this.appSettings.CLOUDANT_VIEW_NAME}`).subscribe(data => {
        data.rows.forEach((obj) => {
          obj.value['document_id'] = obj.key.id;
          obj.value['document_rev'] = obj.key.rev;
          const tripObject : ITripModelResponse = obj.value ;
          const tripModel: TripModel = TripModel.fromResponse(tripObject);
          this.trips.push(tripModel);

          //console.log(tripModel);
       });
    });
  }
}