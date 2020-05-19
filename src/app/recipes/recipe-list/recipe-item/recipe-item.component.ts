import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model'
import { RecipesService } from '../../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeProp: Recipe
  @Input() index: number

  ngOnInit(): void {
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
