import { Component, OnInit } from '@angular/core';
import { Covid19BrazilService } from './shared/services/api/covid19-brazil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-cv19tracker';

  worldStatistics: any;

  constructor(private covidService: Covid19BrazilService) {

  }

  ngOnInit() {
    this.covidService.getWorldTotalCount().subscribe(result => {
      console.log(result)
      this.worldStatistics = result;
    })
  }
}
