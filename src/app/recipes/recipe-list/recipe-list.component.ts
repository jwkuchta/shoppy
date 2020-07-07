import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]

  constructor(private recServ: RecipesService) {}

  ngOnInit(): void {
    this.recServ.recipeChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes
    })
    this.recipes = this.recServ.getRecipes()
  }

}
