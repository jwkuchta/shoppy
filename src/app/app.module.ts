import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
// import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { CoreModule } from './core.module';
import { LoggingService } from './logging.service';
// import { AuthModule } from './auth/auth.module';
// import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  // imports other modules into app module
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // for lazy loading to work we must not import RecipesModule here in app module to avoid eager loading
    // RecipesModule,
    // ShoppingListModule,
    CoreModule,
    // AuthModule
  ],
  bootstrap: [AppComponent],
  // entryComponents: [AlertComponent]
  // exports: [RouterModule]
  providers: [LoggingService]
})
export class AppModule { }