<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useRootStore } from "../stores/root";
import { ROUTES_PATHS } from "../constants";

const route = useRoute();
const rootStore = useRootStore();
const areas: any = computed(() => rootStore.areas);
const categories: any = computed(() => rootStore.categories);
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "v",
  "w",
  "y",
];
const _active = computed(() => rootStore.activeItem);

const isPathActive = (path: String, active: any) => {
  return route.path === path && active === _active.value.value;
};

onMounted(isPathActive);
</script>

<template>
  <el-menu :router="true" :default-openeds="['1']">
    <el-sub-menu index="1">
      <template #title>
        <el-icon :size="24"><Food /></el-icon>
        <span class="sub-menu__title">Recipes</span>
      </template>
      <el-sub-menu index="2">
        <template #title>
          by Letter
          <span v-show="_active.type === 'Letter'"> {{ _active.value }}</span>
        </template>
        <el-menu-item
          v-for="item in alphabet"
          :key="item"
          :index="ROUTES_PATHS.HOME"
          :active="_active.value"
          @click="rootStore.publishActive('Letter', item)"
          :class="['item', isPathActive(ROUTES_PATHS.HOME, item) && 'active']"
        >
          <span>{{ item }}</span>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          by Areas
          <span v-show="_active.type === 'Area'"> {{ _active.value }}</span>
        </template>
        <el-menu-item
          v-for="item in areas"
          :key="item.strArea"
          :index="ROUTES_PATHS.HOME"
          :active="_active.value"
          @click="rootStore.publishActive('Area', item.strArea)"
          :class="[
            'item',
            isPathActive(ROUTES_PATHS.HOME, item.strArea) && 'active',
          ]"
        >
          <span>{{ item.strArea }}</span>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          by Categories
          <span v-show="_active.type === 'Category'"> {{ _active.value }}</span>
        </template>
        <el-menu-item
          v-for="item in categories"
          :key="item.strArea"
          :index="ROUTES_PATHS.HOME"
          :active="_active.value"
          @click="rootStore.publishActive('Category', item.strCategory)"
          :class="[
            'item',
            isPathActive(ROUTES_PATHS.HOME, item.strCategory) && 'active',
          ]"
        >
          <span>{{ item.strCategory }}</span>
        </el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item
      :index="ROUTES_PATHS.CATEGORIES"
      :active="_active.value"
      @click="rootStore.publishActive('categories', 'categories')"
      :class="[
        'item',
        isPathActive(ROUTES_PATHS.CATEGORIES, 'categories') && 'active',
      ]"
    >
      <el-icon :size="24"><Dish /></el-icon>
      <span>Categories</span>
    </el-menu-item>
    <el-menu-item
      :index="ROUTES_PATHS.AREAS"
      :active="_active"
      @click="rootStore.publishActive('areas', 'areas')"
      :class="['item', isPathActive(ROUTES_PATHS.AREAS, 'areas') && 'active']"
    >
      <el-icon :size="24"><Place /></el-icon>
      <span>Areas</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";

.el-menu {
  max-width: 300px;
  border: none;
  > .el-menu-item {
    span {
      font-weight: 600;
    }
  }
  .el-sub-menu__title {
    span {
      margin-left: 10px;
      font-weight: 600;
      &:not(.sub-menu__title) {
        color: var(--el-color-primary);
      }
    }
  }
  .item {
    &.active {
      color: var(--el-color-primary);
    }
  }
}
</style>