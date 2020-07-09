import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Recipe } from './recipe.model'
import { DataStorageService } from '../shared/data-storage.service';

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]> {
    constructor(private dataStorageService: DataStorageService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // no need to subscribe because the resolver will do it for us
        return this.dataStorageService.fetchRecipes()
    }
}

// whenever the route gets loaded, we run the resolver, which fetches the data before the route is loaded, making sure we have data