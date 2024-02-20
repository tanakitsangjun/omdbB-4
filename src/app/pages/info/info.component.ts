import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {serachname} from '../../model/search_nomal';
import { OmdbserviceService } from '../../service/omdbservice.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.scss'
})
export class InfoComponent implements OnInit{
  public imdbid?:string;
  public display?:serachname;
  constructor(private activitedroute:ActivatedRoute,private service:OmdbserviceService){
    
  }
 async ngOnInit() {
    this.activitedroute.queryParamMap.subscribe((params)=>{
      this.imdbid = this.activitedroute.snapshot.queryParamMap.get('imdbid') || 'not found';
  });
  const imdb = this.imdbid;
  this.display = await this.service.getid(imdb);
  console.log(this.display);
  
  }
}
