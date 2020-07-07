import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipesService } from '../recipes.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number
  editMode = false
  recipeForm: FormGroup

  constructor(private route: ActivatedRoute,
              private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.editMode = params['id'] !=null
      this.initForm()
    })
  }

  // this method is called whenever route params change (when page is reloaded)
  private initForm() {
    let recipeName = ""
    let recipeImagePath = ""
    let recipeDescription = ""
    let recipeIngredients = new FormArray([])

    if (this.editMode) {
      let recipe = this.recipeService.getRecipe(this.id)
      recipeName = recipe.name
      recipeImagePath = recipe.imagePath
      recipeDescription = recipe.description
      if (recipe['ingredients']) {
        for (let ingr of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              // we have two controls here and we need to push them into our recipeIngredients array
              'name': new FormControl(ingr.name),
              'amount': new FormControl(ingr.amount)
            })
          )
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingredients': recipeIngredients
    })
  }

  onSubmit() {
    console.log(this.recipeForm)
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

}
