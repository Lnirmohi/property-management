import { MaterialModule } from './shared/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PropertyDisplayComponent } from './main-page/property-display/property-display.component';
import { AddPropertyDialogComponent } from './main-page/add-property-dialog/add-property-dialog.component';
import { NgxAirtableModule } from 'ngx-airtable';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PropertyDisplayComponent,
    AddPropertyDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxAirtableModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
