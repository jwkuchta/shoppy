import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// this is imported instead of the BrowserModule which should only be used in the AppModule
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipesComponent } from './recipes.component'
import { RecipeListComponent } from './recipe-list/recipe-list.component'
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './/recipe-list/recipe-item/recipe-item.component';
import { StartComponent } from './start/start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';


@NgModule({
    declarations: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeEditComponent,
        StartComponent
    ],
    exports: [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
        RecipeEditComponent,
        StartComponent
    ],
    imports: [
        RouterModule, 
        CommonModule, 
        ReactiveFormsModule
    ]
})
export class RecipesModule {}

// Angular parses every module separately so we have to import every module our modules use in here
// it is not enough to have access to those modules in AppModule. Services are the exception