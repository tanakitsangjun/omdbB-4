import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingdataService {
  private sharedData : any = {};



  setSharedData(data: any) {
    console.log(`game ${data}` );
    
    this.sharedData = data;
  }

  getSharedData(){
    return this.sharedData;
  }
  constructor() { }
}
