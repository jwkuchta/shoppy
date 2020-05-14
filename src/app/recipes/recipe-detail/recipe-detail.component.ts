import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model'
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void { }

  onAddToShoppingList() {
      debugger
      this.slService.addIngredients(this.recipe.ingredients)
  }

}

// HIS SOLUTION - GOING THROUGH THE RECIPESERVICE

// import { Component, OnInit, Input } from '@angular/core';
// import { Recipe } from '../recipe.model'
// import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
// import { RecipesService } from '../recipes.service';

// @Component({
//   selector: 'app-recipe-detail',
//   templateUrl: './recipe-detail.component.html',
//   styleUrls: ['./recipe-detail.component.css'],
//   providers: [RecipesService]
// })
// export class RecipeDetailComponent implements OnInit {

//   @Input() recipe: Recipe

//   constructor(private rService: RecipesService) { }

//   ngOnInit(): void {}

//   onAddToShoppingList() {
//       this.rService.addItemsToList(this.recipe.ingredients)
//   }

// }
