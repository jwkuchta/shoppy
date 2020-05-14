import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeClicked = new EventEmitter<Recipe>()

  recipes: Recipe[]

  constructor(private recServ: RecipesService) {}

  ngOnInit(): void {
    this.recipes = this.recServ.getRecipes()
  }

  onRecipeSelected(recipe: Recipe) {
    // console.log(e)
    this.recipeClicked.emit(recipe)
  }

}
