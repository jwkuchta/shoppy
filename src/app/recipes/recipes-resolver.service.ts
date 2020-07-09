import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Recipe } from './recipe.model'
import { DataStorageService } from '../shared/data-storage.service';
import { RecipesService } from './recipes.service';

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]> {
    constructor(private dataStorageService: DataStorageService,
                private recipesService: RecipesService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipesService.getRecipes()
        // no need to subscribe because the resolver will do it for us
        if (recipes.length === 0) return this.dataStorageService.fetchRecipes()
        else return recipes
    }
}

// whenever the route gets loaded, we run the resolver, which fetches the data before the route is loaded, making sure we have data