import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
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
