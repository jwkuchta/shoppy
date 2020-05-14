import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameRef: ElementRef
  @ViewChild('amountInput', {static: true}) amountRef: ElementRef

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {}

  onAddNewIngredient() {
    const name = this.nameRef.nativeElement.value
    const amount = this.amountRef.nativeElement.value
    const newIngredient = new Ingredient(name, amount)
    this.shoppingListService.addIngredient(newIngredient)
  }

}
