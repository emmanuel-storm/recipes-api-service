// recipe/recipe.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { Recipe } from './interfaces/recipe.interface';
import { UserService } from './user.service';

@Injectable()
export class RecipeService {
  // Remplace ce tableau factice par une véritable base de données ou une source de données pour les recettes
  private readonly recipes: Recipe[] = [];

  constructor(private readonly userService: UserService) {}

  create(recipe: Recipe): Recipe {
    this.recipes.push(recipe);
    return recipe;
  }

  findAll(): Recipe[] {
    return this.recipes;
  }

  findOne(id: string): Recipe {
    const recipe = this.recipes.find((r) => r.id === id);
    if (!recipe) {
      throw new NotFoundException('Recipe not found');
    }
    return recipe;
  }

  update(id: string, updatedRecipe: Recipe): Recipe {
    const recipeIndex = this.recipes.findIndex((r) => r.id === id);
    if (recipeIndex === -1) {
      throw new NotFoundException('Recipe not found');
    }
    this.recipes[recipeIndex] = { ...updatedRecipe, id };
    return this.recipes[recipeIndex];
  }

  delete(id: string): void {
    const recipeIndex = this.recipes.findIndex((r) => r.id === id);
    if (recipeIndex === -1) {
      throw new NotFoundException('Recipe not found');
    }
    this.recipes.splice(recipeIndex, 1);
  }
}
