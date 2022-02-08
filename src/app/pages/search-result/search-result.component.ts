import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fixture } from 'src/app/models/fixture';
import { FixturesService } from 'src/app/services/fixtures.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  isLoading: boolean = false;
  searchResults$: Observable<Fixture[]>;
  displayedColumns: string[] = ['fixtureName', 'kickoff', 'venue'];
  @Input('myInputVal') myInputVal: string;
  constructor(private fixturesService: FixturesService) { }
  ngOnInit(): void {
    this.fixturesService.stringSubject.subscribe(
      data => {
        this.onValueChange(data);
      });
  }

  onValueChange(myInputVal) {
    this.isLoading = true;
    this.fixturesService.getFixtures(myInputVal).subscribe((result: any) => {
      this.isLoading = false;
      this.searchResults$ = result;
    });
  }
}
