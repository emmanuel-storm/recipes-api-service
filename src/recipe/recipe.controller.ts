// recipes-api/src/recipe/recipe.controller.ts

import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { RecipeService } from './recipe.service';
import { RecipeRequest, RecipeResponse } from './interfaces/recipe.interface';

@Controller()
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @GrpcMethod('RecipeService', 'Create')
  createRecipe(data: RecipeRequest): RecipeResponse {
    // Assuming that the data object contains the necessary recipe information
    const newRecipe = this.recipeService.create(data);

    return { recipe: newRecipe };
  }

  @GrpcMethod('RecipeService', 'FindAll')
  findAllRecipes(): RecipeResponse {
    const recipes = this.recipeService.findAll();

    return { recipes };
  }

  @GrpcMethod('RecipeService', 'FindOne')
  findRecipeById(data: RecipeRequest): RecipeResponse {
    const recipeId = data.recipeId;
    const recipe = this.recipeService.findOne(recipeId);

    return { recipe };
  }

  @GrpcMethod('RecipeService', 'Update')
  updateRecipe(data: RecipeRequest): RecipeResponse {
    const recipeId = data.recipeId;
    const updatedRecipe = data.recipe;
    const recipe = this.recipeService.update(recipeId, updatedRecipe);

    return { recipe };
  }

  @GrpcMethod('RecipeService', 'Delete')
  deleteRecipe(data: RecipeRequest): RecipeResponse {
    const recipeId = data.recipeId;
    this.recipeService.delete(recipeId);

    return { deleted: true };
  }
}
