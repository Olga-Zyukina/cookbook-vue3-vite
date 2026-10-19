import { ref } from 'vue';
import { defineStore } from 'pinia';
import { commonService } from '@/services';

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref([{"id": "", "strCategory" :"","strCategoryDescription": ""}]);

  async function getCategories() {
    const data = await commonService.getCategories()
    categories.value = data
  }

  return { categories, getCategories }
})