<script setup lang="ts">
  import { ref } from 'vue';

import { useRoute } from "vue-router";
import { useRootStore } from "@/stores/root";

import AppMenu from "@/components/AppMenu.vue";
import { Search } from "@element-plus/icons-vue";

const route = useRoute();
const rootStore = useRootStore();

const isHome = ref(true);
const searchFilter = ref<string>("");
const mainTitle = ref<string>("");

const toggleSidebar = () => {
  const app = document.querySelector("body");
  app?.classList.toggle("toggle-sidebar");
};

</script>

<template>
  <el-container>
    <el-header>
      <RouterLink :to="{ name: 'home' }" class="logo" @click="rootStore.publishActive('Letter', 's')">
        <img src="../../public/logo.png" alt="logo" />
        <span>CookBook</span>
      </RouterLink> 
      <Menu @click="toggleSidebar" class="menu-icon" />
      <div v-show="isHome" class="search">
        <el-input
          type="text"
          style="width: 300px"
          size="large"
          v-model="searchFilter"
          placeholder="Recipe Search"
          :suffix-icon="Search"
        />
      </div>
      <div class="icon">
        <Printer />
        <Share />
        <ShoppingTrolley />
        <Star />
      </div>
    </el-header>
    <el-container class="layout-container">
      <el-aside width="200px">
        <AppMenu />
      </el-aside>
      <el-main>
        <div class="title">
          <h1>
            {{ mainTitle }}
          </h1>
        </div>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item>
            {{ route.path.slice(1).split("/").join(" / ") }}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="inner">
          <RouterView
            v-model:is-home="isHome"
            v-model:search-filter="searchFilter"
            v-model:main-title="mainTitle"
          />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.el-header {
  z-index: 2;
  position: sticky;
  top: 0;
  padding: 0 15px;
  box-shadow: 0px 2px 20px rgba(1, 41, 112, 0.1);
  text-align: right;
  font-size: 12px;
  background-color: white;
  color: var(--el-text-color-primary);
  .header-container {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
  }
  .logo {
    float: left;
    width: 280px;
    height: 100%;
    align-content: center;
    img {
      float: left;
      width: 42px;
      height: auto;
    }
    span {
      float: left;
      margin-left: 7px;
      font-size: 32px;
      font-weight: 600;
    }
  }
  .menu-icon {
    float: left;
    width: 27px;
    height: 100%;
    cursor: pointer;
    &:hover {
      color: var(--el-color-primary);
    }
  }
  .search {
    float: left;
    height: 100%;
    margin-left: 20px;
    align-content: center;
  }
  .icon {
    float: right;
    height: 100%;
    margin-left: 20px;
    font-size: 20px;
    align-content: center;
    cursor: pointer;
    svg {
      width: 20px;
      margin-right: 10px;
      &:hover {
        color: var(--el-color-primary);
      }
    }
  }
}
.layout-container {
  align-items: flex-start;
}
.el-aside {
  z-index: 1;
  position: sticky;
  top: 50px;
  width: 280px;
  min-height: calc(100vh - 60px);
  padding: 20px;
  color: var(--el-text-color-primary);
  box-shadow: 10px 0px 20px -5px rgba(1, 41, 112, 0.1);
}
.toggle-sidebar {
  .el-aside {
    position: fixed;
    left: -280px;
  }
}
.el-main {
  min-height: calc(100vh - 60px);
  padding: 20px 30px 0 30px;
  background: #f6f9ff;
  .title {
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: 700;
    color: var(--el-color-primary);
    h1 {
      margin: 0;
    }
  }
  .el-breadcrumb {
    margin-bottom: 16px;
  }
  .inner {
    position: relative;
    padding: 10px 20px;
    background: white;
    box-shadow: 0px 0 30px rgba(1, 41, 112, 0.1);
  }
}
</style>