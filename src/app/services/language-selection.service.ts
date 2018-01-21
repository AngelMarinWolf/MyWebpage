import { Injectable } from '@angular/core';

@Injectable()
export class LanguageSelectionService {

  public language_value: boolean = true;

  constructor() {
    console.log("Service Ready");
  }

  public change_lenguage () {
    this.language_value = !this.language_value;
  }

}
