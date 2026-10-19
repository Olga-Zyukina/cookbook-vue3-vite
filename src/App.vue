<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useRecipesStore } from '@/stores/recipes';
  import { useAreasStore } from '@/stores/areas';
  import { useCategoriesStore } from '@/stores/categories';
  import { useIngredientsStore } from '@/stores/ingredients';

  import AppLayout from "@/layouts/AppLayout.vue";

  const recipesStore = useRecipesStore();
  const areasStore = useAreasStore();
  const categoriesStore = useCategoriesStore();
  const ingredientsStore = useIngredientsStore();

  onMounted(() => {
    recipesStore.getAllRecipes();
    areasStore.getAreas();
    categoriesStore.getCategories();
    ingredientsStore.getIngredients();
  })
</script>

<template>
  <AppLayout />
</template>

<style lang="scss" scoped>
</style>
