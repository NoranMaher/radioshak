import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../data.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	@Output() searchChanged: EventEmitter<any> = new EventEmitter();
  
  filterInput;
  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    
  }

  filterData() {
// this.searchChanged.emit(this.filterInput);
this.dataService.filter(this.filterInput);
  }

}
