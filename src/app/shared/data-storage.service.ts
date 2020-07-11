import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipesService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipe.model'
import { map, tap, take, exhaustMap } from 'rxjs/operators'
import { AuthService } from '../auth/auth.service';

const url = 'https://angular-recipe-book-ac2be.firebaseio.com/recipes.json'

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(
        private http: HttpClient, 
        private recService: RecipesService,
        private authService: AuthService
    ) {}

    storeRecipes() {
        const recipes = this.recService.getRecipes()
        // put is firebase specific
        this.http.put(url, recipes).subscribe(resp => console.log(resp))
    }

    // fetchRecipes() {
    //     return this.authService.user.pipe(
    //         take(1), 
    //         exhaustMap(user => this.http.get<Recipe[]>(url + '?auth=' + user.token)), // ** see below for alternative
    //         map(recipes => recipes.map(recipe => {
    //                 return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
    //             })
    //         ),
    //         tap(recipes => this.recService.setRecipes(recipes))
    //     )
    // }

    // adding token was later outsourced to auth-interceptor.service.ts so the function changed to:
    fetchRecipes() {
        return this.http.get<Recipe[]>(url).pipe(
            map(recipes => recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
            })
        ),
        tap(recipes => this.recService.setRecipes(recipes))
        )
    }
} 

// this.http.get<Recipe[]>(url, {
//     params: new HttpParams().set('auth', user.token)
// })