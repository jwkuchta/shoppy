import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { RecipesComponent } from './recipes.component'
import { AuthGuard } from '../auth/auth.guard';
import { StartComponent } from './start/start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesResolverService } from './recipes-resolver.service';

const routes: Routes = [
    // { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    // leave recipes path empty for lazy loading to work, see app routing module
    { path: '', component: RecipesComponent, 
    canActivate: [AuthGuard], 
    children: [
        { path: '', component: StartComponent, pathMatch: 'full' },
        { path: 'new', component: RecipeEditComponent},
        { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
        { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] }
    ] }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RecipesRoutingModule {}