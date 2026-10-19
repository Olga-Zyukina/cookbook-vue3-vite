import { ref } from 'vue';
import { defineStore } from 'pinia';
import { commonService } from '@/services';


export const useIngredientsStore = defineStore('ingredients', () => {
  const ingredients = ref([]);

  async function getIngredients() {
    const data = await commonService.getIngredients()
    ingredients.value = data
  }

  return { ingredients, getIngredients }
})