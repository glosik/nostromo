import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nostromo-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('test changelog');
  }

}
