import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  selectedType: string = '';
  
  @Output() filterChanged = new EventEmitter<string>();
  
  onFilterChanged() {
    this.filterChanged.emit(this.selectedType);
  }
}
