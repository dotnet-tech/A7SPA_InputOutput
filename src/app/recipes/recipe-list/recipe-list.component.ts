import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Spaghetti with Roasted Cherry', 'Spaghetti with Roasted Cherry', "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/12/4/0/WU1504H_lighter-asian-noodle-salad_s4x3.jpg.rend.hgtvcom.826.620.suffix/1480899697405.jpeg"),
    new Recipe('Pineapple Shrimp Fajitas', 'Pineapple Shrimp Fajitas', "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/chicken_pasta_bake_25701_16x9.jpg"),
    new Recipe('Roasted Carrots Recipe', 'Roasted Carrots Recipe', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/9/29/0/ig1a09_roasted_carrots.jpg.rend.hgtvcom.826.620.suffix/1393645736360.jpeg'),
    new Recipe('Roasted Carrots Recipe', 'Roasted Carrots Recipe', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2003/9/29/0/ig1a09_roasted_carrots.jpg.rend.hgtvcom.826.620.suffix/1393645736360.jpeg')
  ];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    console.log(recipe);
    this.recipeWasSelected.emit(recipe);
  }
}
