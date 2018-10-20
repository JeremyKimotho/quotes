export class Quote {
  public showDetails:boolean;
  constructor(public sentence: string, public author: string, public submitter:string, public submissionDate: string, public upvotes:Array<number>, public downvotes:Array<number>){
    this.showDetails = true
  }
}

