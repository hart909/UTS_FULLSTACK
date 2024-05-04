import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  public reviewObj = {rating:'', comment:''}
onSubmit(){
  console.log(this.reviewObj);
}
}
