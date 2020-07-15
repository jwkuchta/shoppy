import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';
import { LoggingService } from '../logging.service';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // private ingChangedSub: Subscription
  // ingredients: Ingredient[]
  // now ingredients is an observable, not an array. Because of this change, we have to alter the template
  ingredients: Observable<{ ingredients: Ingredient[]}>
  

  constructor(
    private shoppingListService: ShoppingListService,
    private loggingServ: LoggingService,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] }}>
    ) { }

  ngOnInit(): void {
    // this returns an Observable so we had to change the type of ingredients
    this.ingredients = this.store.select('shoppingList') 
    // this.ingredients = this.shoppingListService.getIngredients()
    // this.ingChangedSub = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
    //   this.ingredients = ingredients
    // })
  }

  ngOnDestroy() :void {
    // this.ingChangedSub.unsubscribe()
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index)
  }

}

