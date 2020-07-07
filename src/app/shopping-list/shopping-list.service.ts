import { Ingredient } from '../shared/ingredient.model'
// import { EventEmitter } from '@angular/core'
import { Subject } from 'rxjs'

export class ShoppingListService {
    
    // ingredientsChanged = new EventEmitter<Ingredient[]>()
    ingredientsChanged = new Subject<Ingredient[]>()
    startedEditing = new Subject<number>()

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('butter', 3)
    ]

    getIngredients() {
        return this.ingredients.slice()
    }

    getIngredient(index: number) {
        return this.ingredients[index]
    }

    addIngredient(ingr: Ingredient) {
        this.ingredients.push(ingr)
        // this.ingredientsChanged.emit(this.ingredients.slice())
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]) {
        for (let ingredient of ingredients) {
            this.addIngredient(ingredient)
        }
        // this.ingredientsChanged.emit(this.ingredients.slice())
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        // replace the ingredient at index with the updated ingredient
        this.ingredients[index] = newIngredient
        // emit the changed ingredient
        this.ingredientsChanged.next(this.ingredients.slice())
    }
        
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