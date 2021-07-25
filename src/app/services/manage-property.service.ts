import { AirtableService } from './airtable.service';
// import { AirtableService } from './../shared/airtable.service';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Property } from '../shared/property';

@Injectable({
  providedIn: 'root'
})
export class ManagePropertyService {

  constructor(private ats: AirtableService) {}

  getPropertyList() {

    return this.ats.getTable().select({}).eachPage();
  }

  addProperty(property: Property) {

    return this.ats.getTable().create(
      {
        fields: {
          name: property.name,
          description: property.description,
          size: property.size
        }
      }
    );
  }

  deleteProperty(propertyId: string) {
    return this.ats.getTable().destroy(propertyId);
  }
}

/*

(err, records) => {

        if(err) {
          return err;
        }

        records.forEach(record => {
          console.log(record);
        });
      }
*/
