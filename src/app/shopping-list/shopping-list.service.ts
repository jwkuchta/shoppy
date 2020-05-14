import { Ingredient } from '../shared/ingredient.model'
import { EventEmitter } from '@angular/core'

export class ShoppingListService {
    
    ingredientsChanged = new EventEmitter<Ingredient[]>()

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('butter', 3)
    ]

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredient(ingr: Ingredient) {
        this.ingredients.push(ingr)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]) {
        debugger
        for (let ingredient of ingredients) {
            this.addIngredient(ingredient)
        }
        debugger
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
    
    // addIngredients(ingredients: Ingredient[]) {
    //     debugger
    //     this.ingredients.push(...ingredients)
    //     this.ingredientsChanged.emit(this.ingredients.slice())
    // }
        
}

// HIS SOLUTION THAT GOES THROUGH THE RECIPE SERVICE

// import { Ingredient } from '../shared/ingredient.model'
// import { EventEmitter } from '@angular/core'

// export class ShoppingListService {
    
//     ingredientsChanged = new EventEmitter<Ingredient[]>()

//     private ingredients: Ingredient[] = [
//         new Ingredient('Apples', 5),
//         new Ingredient('butter', 3)
//     ]

//     getIngredients() {
//         return this.ingredients.slice()
//     }

//     addIngredient(ingr: Ingredient) {
//         this.ingredients.push(ingr)
//         this.ingredientsChanged.emit(this.ingredients.slice())
//     }

//     // MANY EVENTS FIRING
//     // addIngredients(ingredients: Ingredient[]) {
//     //     for (let ingredient of ingredients) {
//     //         this.addIngredient(ingredient)
//     //     }
//     // }

//     addIngredients(ingredients: Ingredient[]) {
//         this.ingredients.push(...ingredients)
//         this.ingredientsChanged.emit(this.ingredients.slice())
//     }
// }