<script setup lang="ts">
import { computed, reactive, ref, onMounted, watch } from "vue";
import { recipeService } from "../services";
import { ROUTES_PATHS } from "../constants";
import { useRootStore } from "../stores/root";
import AppLayout from "../layouts/AppLayout.vue";
import AppLoader from "../components/AppLoader.vue";

const _recipes: any = ref([]);
const _filter: any = ref("");
const _total = ref();
const _isLoading = ref(false);
const state = reactive({
  page: 1,
  limit: 7,
});
const rootStore = useRootStore();
const _active = computed(() => rootStore.activeItem);

const fetchRecipes = async () => {
  try {
    _isLoading.value = true;
    if (_active.value.type === "Area") {
      _recipes.value = await recipeService.getRecipesByArea(
        _active.value.value
      );
    } else if (_active.value.type === "Category") {
      _recipes.value = await recipeService.getRecipesByCategory(
        _active.value.value
      );
    } else {
      _recipes.value = await recipeService.getRecipesByLetter(
        _active.value.value
      );
    }
    _total.value = _recipes.value.length;
    _isLoading.value = false;
  } catch (error) {
    console.log(error);
  }
};

const _filtered_list: any = computed(() => {
  if (_filter.value != "") {
    return _recipes.value.filter((item: { strMeal: string }) => {
      return item.strMeal.toUpperCase().includes(_filter.value.toUpperCase());
    });
  } else {
    return _recipes.value;
  }
});

const _paginatedData = computed(() => {
  const start = (state.page - 1) * state.limit;
  const end = start + state.limit;
  _total.value = _filtered_list.value.length;
  return _filtered_list.value.slice(start, end);
});

const getRecipePath = (id: number) => {
  return `${ROUTES_PATHS.RECIPE.split(":")[0]}${id}`;
};

const setPage = (e: number) => {
  state.page = e;
};

onMounted(fetchRecipes);

watch(() => [_active.value.type, _active.value.value], fetchRecipes);
</script>

<template>
  <AppLayout v-model="_filter" :home="true">
    <template #title> Recipes </template>
    <template #inner>
      <AppLoader v-if="_isLoading" />
      <el-table :data="_paginatedData">
        <el-table-column prop="idMeal" label="Id" />
        <el-table-column label="Image">
          <template #default="scope">
            <router-link :to="getRecipePath(scope.row.idMeal)">
              <img :src="scope.row.strMealThumb" class="image" />
            </router-link>
          </template>
        </el-table-column>
        <el-table-column prop="strMeal" label="Name" />
        <el-table-column prop="strArea" label="Area" />
        <el-table-column prop="strCategory" label="Category" />
        <el-table-column label="Tags">
          <template #default="scope">
            <template v-if="scope?.row?.strTags">
              <el-tag
                v-for="(tag, key) in scope.row.strTags.split(',')"
                :key="key"
                type="primary"
                class="tag"
              >
                {{ tag }}
              </el-tag>
            </template>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        size="small"
        :current-page="state.page"
        :page-size="state.limit"
        :total="_total"
        @current-change="setPage"
      />
    </template>
  </AppLayout>
</template>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.image {
  width: 70px;
  height: 70px;
}
.tag {
  margin: 2px 3px;
}
.el-pagination {
  margin-top: 10px;
  justify-content: center;
}
</style>
