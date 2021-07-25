import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airtable, Base, Table } from 'ngx-airtable';

@Injectable({
  providedIn: 'root'
})
export class AirtableService {

  base: Base;
  table: Table;

  constructor(private http: HttpClient) {

    this.base = new Airtable(this.http, {
      apiKey: 'keyPyDOMPXIltW7Bw',
    }).base('appW7DYNYwUXpt4tA');

    this.table = this.base.table({
      tableName: 'property-list'
    });
  }

  getTable() {
    return this.table;
  }
}
