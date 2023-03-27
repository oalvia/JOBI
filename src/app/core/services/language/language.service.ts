import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

private currentLang: string = '';

  constructor() { }


public getCurrentLang () {
  return this.currentLang;
}

public setCurrentLang (value: string){
this.currentLang = value;
}
}