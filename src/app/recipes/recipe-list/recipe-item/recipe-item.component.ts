// import { Component, OnInit, Input } from '@angular/core';

// @Component({
//   selector: 'app-recipe-item',
//   templateUrl: './recipe-item.component.html',
//   styleUrls: ['./recipe-item.component.css']
// })
// export class RecipeItemComponent implements OnInit {


//   @Input() name: string
//   @Input() description: string
//   @Input() src: string

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

// HIS SOLUTION:

import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe
  
  constructor() { }

  ngOnInit(): void {
  }

}
