import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.scss']
})
export class SummonerComponent implements OnInit {

  private summonerSearchURL = 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/';
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    let headers = new HttpHeaders();
    headers.append('X-Riot-Token', environment.riotApiKey);
    headers.append('Access-Control-Allow-Origin', '*');
    const name = this.route.snapshot.paramMap.get('summonerName');
    const data = this.httpClient.get(this.summonerSearchURL + name, {headers});
    data.subscribe((d: any[]) => {
      console.log(d);
    });
  }

}
