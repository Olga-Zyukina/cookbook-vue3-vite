<script setup>
import { computed } from "vue"
import { useRootStore } from "../stores/root"
import AppLayout from "@/layouts/AppLayout.vue"
import AppLoader from "@/components/AppLoader.vue"

const rootStore = useRootStore();
const areas = computed(() => rootStore.areas);

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