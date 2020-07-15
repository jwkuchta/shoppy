import { Ingredient } from '../../shared/ingredient.model'
import { Action } from '@ngrx/store'
import * as shoppingListActions from './shopping-list.actions'

let initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('butter', 3)
    ]
}

// ngrx only requires "type" on Action, we defined "payload" and now let Angular know so action.payload can be accessed
export function shoppingListReducer(state = initialState, action: shoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            return {
                ...state, 
                ingredients: [...state.ingredients, action.payload]
            }
        case 'ADD_INGREDIENTS':
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload] // has to be spread since it's an array
            }
        default:
            return state
    }
}