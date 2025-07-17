<script setup>
import { computed } from "vue"
import { useRootStore } from "../stores/root"
import AppLayout from "../layouts/AppLayout.vue"
import AppLoader from "../components/AppLoader.vue"


const rootStore = useRootStore();
const areas = computed(() => rootStore.areas);
</script>

<template>
  <AppLayout>
    <template #title> Areas </template>
    <template #inner>
      <AppLoader v-if="!areas" />
      <el-table :data="areas">
        <el-table-column prop="strArea" label="Area" />
      </el-table>
    </template>
  </AppLayout>
</template>