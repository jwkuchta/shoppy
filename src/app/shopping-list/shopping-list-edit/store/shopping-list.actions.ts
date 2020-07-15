import { Action } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';

export class AddIngredient implements Action {
    readonly type = 'ADD_INGREDIENT'
    // payload: Ingredient
    constructor(public payload: Ingredient) {}
}