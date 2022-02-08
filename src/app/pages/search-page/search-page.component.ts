import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FixturesService } from 'src/app/services/fixtures.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchField = new FormControl();
  constructor(private fixturesService: FixturesService) { }

  ngOnInit() {
  }

  sendTextValue(value){
    this.fixturesService.passValue(value);
  }
}
