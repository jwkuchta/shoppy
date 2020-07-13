import { NgModule } from '@angular/core';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipesService } from './recipes/recipes.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-intercepror.service';

// moved all providers from app module here
@NgModule({
    providers: [
        ShoppingListService, 
        RecipesService, 
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
    ]
})
export class CoreModule {}