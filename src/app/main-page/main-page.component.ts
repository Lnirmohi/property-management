import mockProperties from 'src/mockProperty';

import { AddPropertyDialogComponent } from './add-property-dialog/add-property-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Property } from '../shared/property';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  propertyList: Property[];

  constructor(private dialog: MatDialog) {
    this.propertyList = [...mockProperties];
  }

  ngOnInit(): void {
  }

  addPropertyToList() {

    const addPropertyDialogConfig = new MatDialogConfig();

    addPropertyDialogConfig.disableClose = true;
    addPropertyDialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AddPropertyDialogComponent, addPropertyDialogConfig);

    dialogRef.afterClosed().subscribe(formData => {

      // console.log(formData);

      this.propertyList.push(
        new Property(this.propertyList.length + 1, formData.name, formData.description, formData.size)
      );
    });
  }

  deleteProperty(property: Property) {

    const confirmation = confirm('Delete property: ' + property.name);
    let deletedProperty;

    if (confirmation) {
      deletedProperty = this.propertyList.splice(
        this.propertyList.findIndex(item => item.id === property.id),
        1
      );
    }
  }

}
