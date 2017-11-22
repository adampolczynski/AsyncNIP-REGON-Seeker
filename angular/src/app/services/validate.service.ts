import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateSearch(text){ // validate forms search field
    if (text.length < 14 && text.length > 6) { // lets say minimum for searching is 6, and max length is 14 chars
      return true;
    } else {
      return false;
    }
  }
  stripNonNumerics(text) {
    let stripped = text.replace(/\D/g,''); // NIP can be in XXxxx-x.. format so were removing all non-numbers
    return stripped;
  }
}
