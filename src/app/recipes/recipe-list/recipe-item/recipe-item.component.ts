import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeProp: Recipe

  @Input() name: string
  @Input() description: string
  @Input() src: string

  @Output() recipeSelected = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClick() {
    // console.log(e.target)
    this.recipeSelected.emit()
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
