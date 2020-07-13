import { NgModule } from '@angular/core'
import { Routes, RouterModule, PreloadAllModules } from '@angular/router'

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    // only load the content when the user visits this path
    // { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' }
    // new syntax:
    { 
        path: 'recipes', 
        loadChildren: () => import('./recipes/recipes.module').then(module => module.RecipesModule) 
    },
    { 
        path: 'shopping-list',
        loadChildren: () => import('./shopping-list/shopping-list.module').then(module => module.ShoppingListModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule)
    }
]

@NgModule({
    // pre-loads for lazy loading
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})

export class AppRoutingModule { }