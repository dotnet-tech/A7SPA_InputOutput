import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("inputName") Name: ElementRef;
  @ViewChild("inputAmount") amount: ElementRef;
  @Output() ingredientAdded= new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onItemAdd() {
    const name = this.Name.nativeElement.value;
    const amount = this.amount.nativeElement.value;
    const ingredient = new Ingredient(name,amount);
    this.ingredientAdded.emit(ingredient);
  }
}
