export class Quote {
  public showDetails:boolean;
  constructor(public sentence: string, public author: string, public submitter:string, public submissionDate: Date, public upvotes:number, public downvotes:number ){
    this.showDetails = true
  }
}

