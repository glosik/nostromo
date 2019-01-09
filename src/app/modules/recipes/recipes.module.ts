import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeLandingComponent } from './recipe-landing/recipe-landing.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { RecipesAllComponent } from './recipes-all/recipes-all.component';
import { RecipeHeaderComponent } from './recipe-header/recipe-header.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@NgModule({
  declarations: [RecipeLandingComponent, RecipeListComponent, RecipeDetailComponent, ShoppingListComponent, ShoppingEditComponent, RecipesAllComponent, RecipeHeaderComponent, RecipeItemComponent],
  imports: [
    CommonModule
  ]
})
export class RecipesModule { }
