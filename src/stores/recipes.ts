import { ref } from 'vue';
import { defineStore } from 'pinia';
import { recipeService } from '@/services';


export const useRecipesStore = defineStore('recipes', () => {
  const recipes = ref(null);

  async function getAllRecipes() {
    const data = await recipeService.getAllRecipes()
    recipes.value = data
  }

  return { recipes, getAllRecipes }
})