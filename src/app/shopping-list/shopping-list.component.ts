import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';
import { LoggingService } from '../logging.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private ingChangedSub: Subscription
  ingredients: Ingredient[]
  

  constructor(
    private shoppingListService: ShoppingListService,
    private loggingServ: LoggingService
    ) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients()
    this.ingChangedSub = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients
    })

    this.loggingServ.printLog('hello from the shopping list component')
  }

  ngOnDestroy() :void {
    // this.ingChangedSub.unsubscribe()
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index)
  }

}

