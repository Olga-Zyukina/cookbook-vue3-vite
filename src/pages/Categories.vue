<script setup>
import { computed } from "vue"
import { useRootStore } from "../stores/root"
import AppLayout from "../layouts/AppLayout.vue"
import AppLoader from "../components/AppLoader.vue"

const rootStore = useRootStore();
const categories = computed(() => rootStore.categories);

</script>

<template>
  <AppLayout>
    <template #title> Categories </template>
    <template #inner>
      <AppLoader v-if="!categories" />
      <el-table :data="categories">
        <el-table-column prop="idCategory" label="Id" width="50" />
        <el-table-column label="Image" width="100">
          <template #default="scope">
            <img :src="scope.row.strCategoryThumb" class="image" />
          </template>
        </el-table-column>
        <el-table-column prop="strCategory" label="Category" width="150" />
        <el-table-column prop="strCategoryDescription" label="Description" />
      </el-table>
    </template>
  </AppLayout>
</template>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.image {
  width: 70px;
  height: auto;
}
</style>
