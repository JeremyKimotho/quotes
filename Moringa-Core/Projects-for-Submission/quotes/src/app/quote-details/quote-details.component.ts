import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '.././quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  summer(a,b){
    return a+b
  }

  upVote(){
    this.quote.upvotes.push(1)
    console.log(this.quote.upvotes.reduce(this.summer))
    return this.quote.upvotes.reduce(this.summer)
  }

  downVote() {
    this.quote.downvotes.push(1)
    console.log(this.quote.downvotes.reduce(this.summer))
    return this.quote.downvotes.reduce(this.summer)
  }

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
