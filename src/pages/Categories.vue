<script setup>
import { computed } from "vue"
import { useCategoriesStore } from '@/stores/categories';
import AppLayout from "@/layouts/AppLayout.vue"
import AppLoader from "@/components/AppLoader.vue"

const categoriesStore = useCategoriesStore();
const categories = computed(() => categoriesStore.categories);

const isHome = defineModel('is-home');
const mainTitle = defineModel('main-title');

isHome.value = false;
mainTitle.value = 'Categories';

</script>

<template>
  <AppLoader v-if="!categories" />
  <el-table :data="categories">
    <el-table-column prop="strCategory" label="Category" width="150" />
    <el-table-column prop="strCategoryDescription" label="Description" />
  </el-table>
</template>

<style lang="scss" scoped>
</style>