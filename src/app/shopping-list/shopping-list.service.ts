import { Ingredient } from '../shared/ingredient.model'
// import { EventEmitter } from '@angular/core'
import { Subject } from 'rxjs'
import { Store } from '@ngrx/store'
import * as Actions from '../shopping-list/store/shopping-list.actions'
import { Injectable } from '@angular/core'
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer'

@Injectable({providedIn: 'root'})
export class ShoppingListService {
    
    // ingredientsChanged = new EventEmitter<Ingredient[]>()
    ingredientsChanged = new Subject<Ingredient[]>()
    startedEditing = new Subject<number>()

    constructor(private store: Store<fromShoppingList.AppState>) {}

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

    // addIngredients(ingredients: Ingredient[]) {
    //     for (let ingredient of ingredients) {
    //         this.addIngredient(ingredient)
    //     }
    //     // this.ingredientsChanged.emit(this.ingredients.slice())
    //     this.ingredientsChanged.next(this.ingredients.slice())
    // }

    // with Store
    addIngredients(ingredients: Ingredient[]) {
        this.store.dispatch(new Actions.AddIngredients(ingredients))
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        // replace the ingredient at index with the updated ingredient
        this.ingredients[index] = newIngredient
        // emit the changed ingredient
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    deleteIngredient(ingr: Ingredient) {
        this.ingredients = this.ingredients.filter(ing => ing !== ingr)
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    // deleteIngredient(index: number) {
    //     let deleted = this.getIngredient(index)
    //     this.ingredients = this.ingredients.filter(ing => ing !== deleted)
    //     this.ingredientsChanged.next(this.ingredients.slice())
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