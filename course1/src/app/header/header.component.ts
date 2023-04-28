import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  allRecipes: Recipe[];
  constructor(private dataStorageService:DataStorageService,
              private recipeService: RecipeService){

  }
  onSaveData(){
    this.dataStorageService.storeRecipes();
  }
  onFetchData(){
    this.dataStorageService.fetchRecipes()
      .subscribe(
        (recipes)=>{
        this.allRecipes = recipes;
        this.recipeService.setRecipe(this.allRecipes);
      });
  }
}
