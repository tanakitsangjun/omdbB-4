import { Injectable } from '@angular/core';
import { Searchs } from '../model/search_';
import { ConstantsService } from '../config/constants.service';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import {serachname} from '../model/search_nomal';

@Injectable({
  providedIn: 'root'
})
export class OmdbserviceService {

  constructor(private constants:ConstantsService,private http:HttpClient) { }
  
 async getid(input:any){
    const url = this.constants.API_ENDPOINT;
    const response = await lastValueFrom(this.http.get(url,{
      params:{
        i: input,
      }
    }));
    console.log("i");
    return response as serachname;
  }
  async getbyfullname(input:HTMLInputElement){
    const url = this.constants.API_ENDPOINT;
    const response = await lastValueFrom(this.http.get(url,{
      params:{
        t:input.value,
      }
    }));
    console.log("t");
   return response as serachname;
  }
  async getincludname(input:HTMLInputElement,page:number){
    const url = this.constants.API_ENDPOINT;
    const response = await lastValueFrom(this.http.get(url,{
      params:{
        s:input.value,
        // page:page
      },
    }));
    console.log("s");
    // console.log(response);
    return response as Searchs;
  }
  async nextpages(input:HTMLInputElement,pages:number){
    const url =  this.constants.API_ENDPOINT;
    console.log(pages);
    const response = await lastValueFrom(this.http.get(url,{
      params:{
        s:input.value,
        page:pages
      }
    }));
    console.log(response);
    return response as Searchs;
  }
  
}
