import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    // only load the content when the user visits this path
    // { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' }
    // new syntax:
    { 
        path: 'recipes', 
        loadChildren: () => import('./recipes/recipes.module').then(module => module.RecipesModule) }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }