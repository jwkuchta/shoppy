import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipesService } from './recipes/recipes.service';
// import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-intercepror.service';
import { AlertComponent } from './shared/alert/alert.component';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { CoreModule } from './core.module';
// import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    // PlaceholderDirective
  ],
  // imports other modules into app module
  imports: [
    BrowserModule,
    FormsModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    CoreModule
  ],
  // we provide our interceptor that adds user.token to the request here
  // moved providers to core module
  // providers: [
  //   ShoppingListService, 
  //   RecipesService, 
  //   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  // ],
  bootstrap: [AppComponent],
  // entryComponents: [AlertComponent]
  // exports: [RouterModule]
})
export class AppModule { }