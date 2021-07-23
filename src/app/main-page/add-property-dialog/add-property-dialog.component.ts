import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-property-dialog',
  templateUrl: './add-property-dialog.component.html',
  styleUrls: ['./add-property-dialog.component.scss']
})
export class AddPropertyDialogComponent implements OnInit {

  addPropertyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddPropertyDialogComponent>) {
  }

  ngOnInit(): void {
    this.addPropertyForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      size: [null, Validators.required]
    });
  }

  handleSubmit() {
    this.dialogRef.close({...this.addPropertyForm.value});
    this.addPropertyForm.reset();
  }

  close() {
    this.dialogRef.close();
  }

  clear() {
    this.addPropertyForm.reset();
  }

}
