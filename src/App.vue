<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useRootStore } from '@/stores/root';
  import AppLayout from "@/layouts/AppLayout.vue";

  const rootStore = useRootStore();

  onMounted(() => {
    rootStore.getAllRecipes();
    rootStore.getAreas();
    rootStore.getCategories();
    rootStore.getIngredients();
  })
</script>

<template>
  <AppLayout />
</template>

<style lang="scss" scoped>
</style>
