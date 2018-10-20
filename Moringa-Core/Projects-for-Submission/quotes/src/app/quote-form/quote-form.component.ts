import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '.././quote'


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote('', '', '', d, [], []);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote('', '', '', d, [], []);

  }

  constructor() { }

  ngOnInit() {
  }

}
var today = new Date();
var d = today.toDateString(); 