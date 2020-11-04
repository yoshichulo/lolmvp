import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  summonerName: string;
  constructor() { }

  ngOnInit(): void {
  }
  goToSummoner(event): void{
    window.location.href = '/summoner/' + this.summonerName;
  }
}
