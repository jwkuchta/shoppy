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

    fetchRecipes() {
        // take allows us to only receive the value once, when we fetch, we get the user once from the obs
        // we do not want an ongoing subscription and it will automatically unsubscribe after 1st time
        // we are combining two observables into one, we get the user from the first observable,
        // exhaustMap waits for the result of take to complete and then passes the result
        // we start with user observable, but then return the function we pass on to the exhaustMap (our http req)
        // return this.authService.user.pipe(
        //     take(1), 
        //     exhaustMap(user => this.http.get<Recipe[]>(url)),
        //     map(recipes => {
        //         return recipes.map(recipe => {
        //             return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
        //         })
        //     }),
        //     tap(recipes => this.recService.setRecipes(recipes))
        // )

        return this.authService.user.pipe(
            take(1), 
            exhaustMap(user => this.http.get<Recipe[]>(url + '?auth=' + user.token)), // ** see below for alternative
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