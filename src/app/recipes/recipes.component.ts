import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  displayed

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClicked(recipe) {
    this.displayed = recipe
    // console.log(this.displayed)
  }

}
