import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER = 'http://localhost/';
  private headers = new HttpHeaders({'X-Riot-Token': environment.riotApiKey});
  constructor(private httpClient: HttpClient) { }

  public getSummonerInfoByName(name): any{
    return this.httpClient.get(this.REST_API_SERVER
      + 'lol/summoner/v4/summoners/by-name/'
      + name
      + '?platform=EUW1', {headers: this.headers});
  }
}
