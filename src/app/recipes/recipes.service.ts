import { Recipe } from './recipe.model'
import { EventEmitter } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'

export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>()

    private recipes: Recipe[] = [
        new Recipe(
            'Test Recipe', 
            'This is a testy test', 
            'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_610/hellofresh_s3/image/mediterranean-hummus-couscous-bowls-9aa1b9c2.jpg', 
            [
                new Ingredient('testy test', 1),
                new Ingredient('testy sauce', 2)
            ]),
        new Recipe(
            'Buttered Chinken', 
            'this is one of my favorites', 
            'https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-64.jpg', 
            [
                new Ingredient('chicken', 1),
                new Ingredient('butter', 2)
            ]),
        new Recipe(
            'Mongolian Beef', 
            'Diego likes this one', 
            'https://omnivorescookbook.com/wp-content/uploads/2018/05/1805_Mongolian-Beef_550.jpg', 
            [
                new Ingredient('beef', 1),
                new Ingredient('green onions', 2)
            ])
    ]

    getRecipes() {
        // makes a copy so we do not modify the original array
        return this.recipes.slice()
    }
}