import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeClicked = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a testy test', 'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_610/hellofresh_s3/image/mediterranean-hummus-couscous-bowls-9aa1b9c2.jpg'),
    new Recipe('Buttered Chinken', 'this is one of my favorites', 'https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-64.jpg'),
    new Recipe('Mongolian Beef', 'Diego likes this one', 'https://omnivorescookbook.com/wp-content/uploads/2018/05/1805_Mongolian-Beef_550.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    // console.log(e)
    this.recipeClicked.emit(recipe)
  }

}
