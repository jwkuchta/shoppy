import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core'

export class ShoppingListService {
    
    ingredientsChanges = new EventEmitter<Ingredient[]>()

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('butter', 3)
    ]

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredient(ingr: Ingredient) {
        this.ingredients.push(ingr)
        this.ingredientsChanges.emit(this.ingredients.slice())
    }
}