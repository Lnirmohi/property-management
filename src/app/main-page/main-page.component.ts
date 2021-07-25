import { ManagePropertyService } from './../services/manage-property.service';

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

  constructor(
    private dialog: MatDialog,
    private manageProperty: ManagePropertyService,
  ) {
      this.propertyList = [];
  }

  ngOnInit(): void {
    this.getPropertyList();
  }

  getPropertyList() {

    this.manageProperty.getPropertyList()
      .subscribe(records => {

        records.forEach(record => {
          this.propertyList.push(new Property(
            record.id,
            record.fields.name,
            record.fields.description,
            record.fields.size
          )
        );
      });
    });
  }

  addPropertyToList() {

    const addPropertyDialogConfig = new MatDialogConfig();

    addPropertyDialogConfig.disableClose = true;
    addPropertyDialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(AddPropertyDialogComponent, addPropertyDialogConfig);

    dialogRef.afterClosed().subscribe(formData => {

      this.manageProperty.addProperty(
        new Property(
          null,
          formData.name,
          formData.description,
          formData.size
        )
      ).subscribe(data => {

        this.propertyList.push(
          new Property(data.id, data.fields.name, data.fields.description, data.fields.size)
        );
      });

     /*   */
    });
  }

  deleteProperty(property: Property) {

    const confirmation = confirm('Delete property: ' + property.name);

    if (confirmation) {

      this.manageProperty.deleteProperty(property.id)
        .subscribe(data => {

          if (data.deleted) {
            this.propertyList.splice(
              this.propertyList.findIndex(item => item.id === property.id),
              1
            );
          }
        });
    }
  }

}

