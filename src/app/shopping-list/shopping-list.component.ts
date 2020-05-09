import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('butter', 3)
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addNewIngredientToList(data) {
    // new Ingredient(data.name, data.amount)
    this.ingredients.push(new Ingredient(data.name, data.amount))
  }

  //  his solution:
  // addNewIngredientToList(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient)
  // }

}
