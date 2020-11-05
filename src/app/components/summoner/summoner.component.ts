import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.scss']
})
export class SummonerComponent implements OnInit {

  private summonerName = '';
  private level = 1;
  private iconId = 'placeHolder';
  constructor(private data: DataService, private route: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(): void {
    const name = this.route.snapshot.paramMap.get('summonerName');
    const observer = this.data.getSummonerInfoByName(name).subscribe((d: any[]) => {
      d = JSON.parse(JSON.stringify(d));
      this.summonerName = d.name;
      this.level = d.summonerLevel;
      this.iconId = d.profileIconId.toString();
    });
  }

}
