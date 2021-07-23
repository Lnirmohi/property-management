import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Property } from 'src/app/shared/property';

@Component({
  selector: 'app-property-display',
  templateUrl: './property-display.component.html',
  styleUrls: ['./property-display.component.scss']
})
export class PropertyDisplayComponent implements OnInit {

  @Input() property: Property;
  @Output() deletePropertyEvent: EventEmitter<Property>;

  constructor() {
    this.deletePropertyEvent = new EventEmitter();
  }

  ngOnInit(): void {
  }

  handleDelete() {
    this.deletePropertyEvent.emit(
      this.property
    );
  }

}
