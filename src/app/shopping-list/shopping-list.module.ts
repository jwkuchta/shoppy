import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ShoppingListComponent, 
        ShoppingListEditComponent
    ],
    imports: [
        FormsModule, 
        CommonModule, // unlocks ngFor and ngIf
        RouterModule.forChild([
            { path: 'shopping-list', component: ShoppingListComponent }
        ])
    ],
    exports: [
        ShoppingListComponent, 
        ShoppingListEditComponent
    ]
    
})

export class ShoppingListModule { }