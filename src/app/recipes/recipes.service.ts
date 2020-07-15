import { Recipe } from './recipe.model'
import { Injectable } from '@angular/core'
import { ShoppingListService } from '../shopping-list/shopping-list.service'
import { Subject } from 'rxjs'
import { Ingredient } from '../shared/ingredient.model'

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
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
    }

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

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1)
        this.recipeChanged.next(this.recipes.slice())
    }
}