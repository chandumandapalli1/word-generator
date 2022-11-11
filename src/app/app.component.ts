import { Component } from '@angular/core';
import arrayWords from "../utils/words";
import countryNames from "../utils/country"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words='';
  countryNames='';
  limit=5;



  handleSlideChange(newLimit:number)
  {
    this.limit=newLimit;

  }

  generate()
  {
    this.words=arrayWords.slice(0,this.limit).join(" ");
  }

  generateCountryNames()
  {
    this.countryNames=countryNames.slice(0,this.limit).join(" ");
  }






}
