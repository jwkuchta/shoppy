import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { RecipesComponent } from './recipes/recipes.component';
// import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
// import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
// import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { StartComponent } from './recipes/start/start.component';
// import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: StartComponent, pathMatch: 'full' },
        { path: ':id', component: RecipeDetailComponent }
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: '**', redirectTo: '/recipes', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}