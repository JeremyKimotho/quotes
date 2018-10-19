import { Component, OnInit } from '@angular/core';
import { Quote } from '.././quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quote('Playing football is simple, but playing simple football is the hardest thing', 'Jeremy Kimotho', 'Jeremy Kimotho', today),
    new Quote('The more difficult the victory, the greater the happiness in winning.', 'Edson "Pele" Arantes', 'Jeremy Kimotho', today),
    new Quote('When people succeed, it is because of hard work. Luck has nothing to do with success', 'Diego Maradona', 'Jeremy Kimotho', today)
    
  ]

  constructor() { }

  ngOnInit() {
  }
  

}
var today = new Date();
