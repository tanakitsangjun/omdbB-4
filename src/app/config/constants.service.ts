import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  public readonly API_ENDPOINT: string = 'https://www.omdbapi.com/?apikey=832377ed';
  // public readonly 
  constructor() { }
}
