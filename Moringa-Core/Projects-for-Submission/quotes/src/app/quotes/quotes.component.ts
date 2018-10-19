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
    new Quote('Playing football is simple, but playing simple football is the hardest thing', 'Jeremy Kimotho', 'Jeremy Kimotho', today, [0], [0]),
    new Quote('The more difficult the victory, the greater the happiness in winning', 'Edson "Pele" Arantes', 'Jeremy Kimotho', today, [0], [0]),
    new Quote('When people succeed, it is because of hard work. Luck has nothing to do with success', 'Diego Maradona', 'Jeremy Kimotho', today, [0], [0])
    
  ]

  ngOnInit() {
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.unshift(quote);
  }

  sum(a, b){
    return a + b
  }

  upVote(){
    this.quotes.upvotes.push(1)
  }

  downVote(){
    this.quotes.upvotes.push(1)
  }
    
  deleteQuote(index) {
        this.quotes.splice(index, 1);
      
  }


  constructor() { }


}
var today = new Date();

