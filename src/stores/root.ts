import { ref } from 'vue';
import { defineStore } from 'pinia';
import { commonService } from '../services';


export const useRootStore = defineStore('root', () => {
  const areas = ref(null);
  const categories = ref(null);
  const ingredients = ref(null);
  const activeItem = ref({'type': 'Letter', 'value': 's'});

  
  async function getAreas() {
    const data = await commonService.getAreas()
    areas.value = data
  }

  async function getCategories() {
    const data = await commonService.getCategories()
    categories.value = data
  }

  async function getIngredients() {
    const data = await commonService.getIngredients()
    ingredients.value = data
  }

  function publishActive(type: string, value: string) {
    activeItem.value.type = type;
    activeItem.value.value = value;
  }  

  return { areas, categories, ingredients, activeItem, getAreas, getCategories, getIngredients, publishActive }
})