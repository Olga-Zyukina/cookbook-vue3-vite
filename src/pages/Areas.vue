<script setup>
import { computed } from "vue"
import { useAreasStore } from '@/stores/areas';
import AppLayout from "@/layouts/AppLayout.vue"
import AppLoader from "@/components/AppLoader.vue"

const areasStore = useAreasStore();
const areas = computed(() => areasStore.areas);

const isHome = defineModel('is-home');
const mainTitle = defineModel('main-title');

isHome.value = false;
mainTitle.value = 'Areas';

</script>

<template>
  <AppLoader v-if="!areas" />
  <el-table :data="areas">
    <el-table-column prop="strArea" label="Area" />
  </el-table>
</template>

<style lang="scss" scoped>
</style>