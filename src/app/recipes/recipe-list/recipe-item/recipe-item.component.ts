import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model'
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeProp: Recipe

  constructor(private recServ: RecipesService) { }

  ngOnInit(): void {
  }

  onRecipeClick() {
    // console.log(e.target)
    // this.recipeSelected.emit()
    this.recServ.recipeSelected.emit(this.recipeProp)
  }

}

// HIS SOLUTION:

// import { Component, OnInit, Input } from '@angular/core';
// import { Recipe } from '../../recipe.model'

// @Component({
//   selector: 'app-recipe-item',
//   templateUrl: './recipe-item.component.html',
//   styleUrls: ['./recipe-item.component.css']
// })
// export class RecipeItemComponent implements OnInit {

//   @Input() recipeProp: Recipe

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
