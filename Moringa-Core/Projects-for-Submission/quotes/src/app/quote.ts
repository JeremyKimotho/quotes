export class Quote {
  public showAuthor:boolean;
  constructor(public sentence: string, public author: string, public submissionDate: Date) {
    this.showAuthor = true
  }
}