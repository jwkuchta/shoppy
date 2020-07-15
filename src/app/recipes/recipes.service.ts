import { Recipe } from './recipe.model'
import { Injectable } from '@angular/core'
import { ShoppingListService } from '../shopping-list/shopping-list.service'
import { Subject } from 'rxjs'

@Injectable()
export class RecipesService {
    recipeSelected = new Subject<Recipe>()
    recipeChanged = new Subject<Recipe[]>()

    private recipes: Recipe[] = []

    constructor(
        private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice()
    }

    getRecipe(id: number) {
        return this.recipes[id]
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes
        this.recipeChanged.next(this.recipes.slice())
    }

    // his solution, going through the RecipesService to add ingredients to the shopping list
    // addItemsToList(ingredients: Ingredient[]) {
    //     this.slService.addIngredients(ingredients)
    // }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
        // listen to this event in recipe-list component
        this.recipeChanged.next(this.recipes.slice())
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe
        // listen to this event in recipe-list component
        this.recipeChanged.next(this.recipes.slice())
    }

    deleteRecipe(recipe: Recipe) {
        this.recipes = this.recipes.filter(rec => rec !== recipe)
        this.recipeChanged.next(this.recipes.slice())
    }

    // his solution
    // deleteRecipe(index: number) {
    //     this.recipes.splice(index, 1)
    //     this.recipeChanged.next(this.recipes.slice())
    // }
}


// dummy data

    // private recipes: Recipe[] = [
    //     new Recipe(
    //         1,
    //         'Test Recipe', 
    //         'This is a testy test', 
    //         'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_610/hellofresh_s3/image/mediterranean-hummus-couscous-bowls-9aa1b9c2.jpg', 
    //         [
    //             new Ingredient('testy test', 1),
    //             new Ingredient('testy sauce', 2)
    //         ]),
    //     new Recipe(
    //         2,
    //         'Buttered Chinken', 
    //         'this is one of my favorites', 
    //         'https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-64.jpg', 
    //         [
    //             new Ingredient('chicken', 1),
    //             new Ingredient('butter', 2)
    //         ]),
    //     new Recipe(
    //         3,
    //         'Mongolian Beef', 
    //         'Diego likes this one', 
    //         'https://omnivorescookbook.com/wp-content/uploads/2018/05/1805_Mongolian-Beef_550.jpg', 
    //         [
    //             new Ingredient('beef', 1),
    //             new Ingredient('green onions', 2)
    //         ])
    // ]