import { Ingredient } from '../../shared/ingredient.model'
import { Action } from '@ngrx/store'
import * as shoppingListActions from './shopping-list.actions'

export interface State {
    ingredients: Ingredient[]
    editedIngredient: Ingredient
    editedIngredientIndex: number
}

export interface AppState {
    shoppingList: State
}

let initialState: State = {
    ingredients: [new Ingredient('Apples', 5), new Ingredient('butter', 3)],
    editedIngredient: null,
    editedIngredientIndex: -1
}

// ngrx only requires "type" on Action, we defined "payload" and now let Angular know so action.payload can be accessed
export function shoppingListReducer(state: State = initialState, action: shoppingListActions.ShoppingListActions) {
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
        case 'UPDATE_INGREDIENT':
            debugger
            const updated = [...state.ingredients]
            updated[action.payload.index] = action.payload.ingredient
            return {
                ...state,
                ingredients: [...updated]
            }
        case 'DELETE_INGREDIENT':
            return {
                ...state,
                ingredients: state.ingredients.filter(ingr => ingr.name !== action.payload.name)
            }
        case 'START_EDIT':
            return {
                ...state,
                editedIngredientIndex: action.payload,
                editedIngredient: {...state.ingredients[action.payload]}
            }
        case 'STOP_EDIT':
            return {
                ...state,
                editedIngredient: null,
                editedIngredientIndex: -1
            }
        default:
            return state
    }
}