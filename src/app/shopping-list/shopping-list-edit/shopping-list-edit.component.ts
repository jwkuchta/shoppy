import { Component, OnInit, ViewChild, Output, ElementRef, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameRef: ElementRef
  @ViewChild('amountInput', {static: true}) amountRef: ElementRef

  // @Output() newIngredientAdded = new EventEmitter<{name: string, amount: number}>()
  // OR:
  @Output() newIngredientAdded = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit(): void {
  }

  onAddNewIngredient(name, amount) {
    // debugger
    this.newIngredientAdded.emit({
      name: name.value,
      amount: amount.value
    })
  }

  // alternatively, his solution:

  // onAddNewIngredient() {
  //   const name = this.nameRef.nativeElement.value
  //   const amount = this.amountRef.nativeElement.value
  //   const newIngredient = new Ingredient(name, amount)
  //   this.newIngredientAdded.emit(newIngredient)
  // }

}
