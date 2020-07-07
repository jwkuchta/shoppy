import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipesService } from '../recipes.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

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
              'name': new FormControl(ingr.name, Validators.required),
              'amount': new FormControl(ingr.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    })
  }

  onSubmit() {
    let recipe = this.recipeForm.value
    console.log(recipe)
    if (this.editMode) this.recipeService.updateRecipe(this.id, recipe)
    else this.recipeService.addRecipe(recipe)
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

}
