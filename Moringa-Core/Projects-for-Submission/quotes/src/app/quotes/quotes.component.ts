import { Component, OnInit } from '@angular/core';
import { Quote } from '.././quote'
import { ADDRGETNETWORKPARAMS } from 'dns';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quote('Playing football is simple, but playing simple football is the hardest thing', 'Jeremy Kimotho', 'Jeremy Kimotho', d, [0], [0]),
    new Quote('The more difficult the victory, the greater the happiness in winning', 'Edson "Pele" Arantes', 'Jeremy Kimotho', d, [0], [0]),
    new Quote('When people succeed, it is because of hard work. Luck has nothing to do with success', 'Diego Maradona', 'Jeremy Kimotho', d, [0], [0])
    
  ]

  ngOnInit() {
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.submissionDate = d;
    this.quotes.unshift(quote);
  }


  deleteQuote(isComplete, index) {
  if (isComplete) {
    let toDelete=true
    if (toDelete) {
      this.quotes.splice(index, 1);
    }
  }
}
  
  toogleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }


  constructor() { }


}
var today = new Date();
var d = today.toDateString(); 