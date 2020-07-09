import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model'
import { map } from 'rxjs/operators'

const url = 'https://angular-recipe-book-ac2be.firebaseio.com/recipes.json'


@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private recService: RecipesService) {}

    storeRecipes() {
        const recipes = this.recService.getRecipes()
        // put is firebase specific
        this.http.put(url, recipes).subscribe(resp => console.log(resp))
    }

    fetchRecipes() {
        // we tell TS what sort of data we expect to receive. Not mandatory but
        this.http
        .get<Recipe[]>(url)
        .pipe(map(recipes => {
            return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
            })
        }))
        .subscribe(recipes => {
            // we forward the recipes array to the recipes service to be used everywhere it is needed
            this.recService.setRecipes(recipes)
        })
    }
} 