//  WITH TEMPLATE DRIVEN APPROACH
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from "@angular/forms"
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  // why do we need the ViewChild if we already have access to the form?
  @ViewChild('form') slForm: NgForm
  subsciption: Subscription
  editMode = false
  editedItem: Ingredient
  editedItemIndex: number

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subsciption = this.shoppingListService.startedEditing.subscribe(
      // we will receive the number of the item we need to edit
      (index: number) => {
        this.editMode = true
        this.editedItemIndex = index
        this.editedItem = this.shoppingListService.getIngredient(index)
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    )
  }

  onSubmit(form: NgForm) {
    console.log(form)
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount)

    if ( this.editMode ) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)
    } else {
      this.shoppingListService.addIngredient(newIngredient)
    } 
    // it appears to work as expected but we are stuck in editMode. It is important we leave the editMode
    this.editMode = false
    form.reset()
  }

  onClear() {
    this.slForm.reset()
    this.editMode = false
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex)

    this.slForm.reset()
    this.editMode = false
  }

  ngOnDestroy() {
    this.subsciption.unsubscribe()
  }

}

// PREVIOUS OPTION WITHOUT TEMPLATE DRIVEN APPROACH

// import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { Ingredient } from '../../shared/ingredient.model'
// import { ShoppingListService } from '../shopping-list.service';

// @Component({
//   selector: 'app-shopping-list-edit',
//   templateUrl: './shopping-list-edit.component.html',
//   styleUrls: ['./shopping-list-edit.component.css']
// })
// export class ShoppingListEditComponent implements OnInit {

//   @ViewChild('nameInput', {static: true}) nameRef: ElementRef
//   @ViewChild('amountInput', {static: true}) amountRef: ElementRef

//   constructor(private shoppingListService: ShoppingListService) { }

//   ngOnInit() {}

//   onAddNewIngredient() {
//     const name = this.nameRef.nativeElement.value
//     const amount = this.amountRef.nativeElement.value
//     const newIngredient = new Ingredient(name, amount)
//     this.shoppingListService.addIngredient(newIngredient)
//   }

// }
