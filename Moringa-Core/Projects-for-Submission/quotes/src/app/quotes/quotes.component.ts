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
    new Quote('Playing football is simple, but playing simple football is the hardest thing', 'Jeremy Kimotho', 'Jeremy Kimotho', today),
    new Quote('The more difficult the victory, the greater the happiness in winning', 'Edson "Pele" Arantes', 'Jeremy Kimotho', today),
    new Quote('When people succeed, it is because of hard work. Luck has nothing to do with success', 'Diego Maradona', 'Jeremy Kimotho', today)
    
  ]

  ngOnInit() {
  }


  // var upVotesA = []
  // var downVotesA = []

  // sum(a, b){
  //   return a + b
  // }

  // upVote(){
  //   upVotesA.push(1)
  //   upVotesA.reduce(sum)
  // }

  // downVote(){
  //   downVotesA.push(1)
  //   downVotesA.reduce(sum)
  // }
    
  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`)

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  addNewQuote(quote) {
      let quoteLength = this.quotes.length;
      quote.id = quoteLength + 1;
      this.quotes.unshift(quote);
    }

  constructor() { }


}
var today = new Date();

