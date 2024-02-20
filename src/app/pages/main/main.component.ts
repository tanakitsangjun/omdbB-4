import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConstantsService } from '../../config/constants.service';
import { Searchs } from '../../model/search_';
import  { serachname }  from '../../model/search_nomal';
import { OmdbserviceService } from '../../service/omdbservice.service';
import { SerachbarComponent } from '../../components/serachbar/serachbar.component';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule,HttpClientModule,CommonModule,SerachbarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  public data?: serachname;
  public data2?: Searchs;
  public array:any;
  public pages : number = 1;
  // public dataserch : 
  constructor(
    private http: HttpClient,
    private constants: ConstantsService,
    private service: OmdbserviceService,
    private rouuter:Router
  ) {}
  async getdata(input: HTMLInputElement) {
    console.log(input.value);
    const firstTwoChars = input.value.substring(0, 2);
    if (firstTwoChars.startsWith('tt')) {
      this.data = await this.service.getid(input.value);
        if(this.data.Response == 'False'){
          Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "error",
            color:"white",
            background: "rgb(23 23 23)",
          });
        }
    } else {
      this.data2 = await this.service.getincludname(input,this.pages);
      if (this.data2 && this.data2.Search && Array.isArray(this.data2.Search)) {
        for (const movie of this.data2.Search) {
          const name = input.value.toLowerCase();
          const S_name = movie.Title.toLowerCase();
          if (S_name === name) {
            this.data = await this.service.getbyfullname(input);
          }
        }
      }
    }
  
    console.log(this.data);
    console.log(this.data2);
  }
  
  async nextpages(input:HTMLInputElement,page:number){
   this.data2 = await this.service.nextpages(input, this.pages += page);
  }
  async prev(input:HTMLInputElement,page:number){
    this.pages  -= page;
    if(this.pages == 0){
      this.pages  =1;
    }
   this.data2 = await this.service.nextpages(input,this.pages);
  }

  public navigate(imdbid:string){
    this.rouuter.navigate(['info'],{
      queryParams:{
        imdbid:imdbid
      }
    });
  }
  
}
