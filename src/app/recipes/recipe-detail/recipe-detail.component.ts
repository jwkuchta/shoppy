import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() recipe: Recipe
  recipe: Recipe
  id: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipesService
    ) { }

  ngOnInit(): void { 
    // this.recipe = this.getRecipe()
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.recipe = this.recipeService.getRecipe(this.id)
    })
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onRecipeEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route})
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }

  onRecipeDelete() {
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate(['/recipes'])
  }

  // his solution
  // onRecipeDelete() {
  //   this.recipeService.deleteRecipe(this.id)
  // }

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
