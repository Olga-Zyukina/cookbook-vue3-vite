<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { recipeService, commonService } from "../services";
import AppLayout from "../layouts/AppLayout.vue";
import AppLoader from "../components/AppLoader.vue";

const route = useRoute();
const recipeId: any = route?.params.id;
const isLoading = ref(false);
const recipe: any = ref(recipeService.getEmptyRecipe());
const recipeIngredients = ref([commonService.getEmptyIngredient()]);

const fetchRecipe = async () => {
  try {
    isLoading.value = true;
    const data = await recipeService.getRecipesById(recipeId);
    isLoading.value = false;
    recipe.value = { ...data };
  } catch (error) {
    console.log(error);
  }
};

const normalizeRecipeIngredients = () => {
  const normalizeIngredients = [];

  for (let i = 1; i <= 20; i++) {
    if (recipe.value[`strIngredient${i}`]) {
      const ingr = {
        id: Math.random().toString(36).slice(2),
        title: recipe.value[`strIngredient${i}`],
        measure: recipe.value[`strMeasure${i}`],
      };
      normalizeIngredients.push(ingr);
    }
  }
  recipeIngredients.value = normalizeIngredients;
};

function randomInteger(min: number, max: number) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const time = randomInteger(20, 90);
const servings = randomInteger(2, 6);
const rating = randomInteger(1000, 50000);

onMounted(async () => {
  if (parseInt(recipeId)) {
    await fetchRecipe();
    normalizeRecipeIngredients();
  }
});
</script>

<template>
  <AppLayout>
    <template #title>
      {{ recipe.strMeal }}
    </template>
    <template #inner>
      <AppLoader v-if="isLoading" />
      <div v-else class="wrapper">
          <div class=" info">
            <img :src="recipe.strMealThumb" alt="img" class="image">
            <div>
              <span>Category</span>
              <el-tag type="primary" effect="dark">{{
                recipe.strCategory
              }}</el-tag>
            </div>
            <div>
              <span>Time</span>
              {{ time }} minutes
            </div>
            <div>
              <span>Servings</span>
              {{ servings }} servings
            </div>
            <div>
              <span>Area</span>
              <el-tag type="primary" effect="dark">{{ recipe.strArea }}</el-tag>
            </div>
            <div class="rating">
              <span>Rating</span>
              <el-icon size="15"><StarFilled /></el-icon>
              <el-icon size="15"><StarFilled /></el-icon>
              <el-icon size="15"><StarFilled /></el-icon>
              <el-icon size="15"><StarFilled /></el-icon>
              <el-icon size="15"><StarFilled /></el-icon>
              ( {{ rating }} )
            </div>
            <div v-if="recipe.strTags">
              <span>Tags</span>
              <el-tag
                v-for="(tag, key) in recipe.strTags.split(',')"
                :key="key"
                type="primary"
                effect="plain"
                class="tag"
              >
                {{ tag }}
              </el-tag>
            </div>
          </div>
          <div class="row justify-space-between">
            <div class="col-l ingredients">
              <div class="subtitle">Ingredients</div>
                <div
                  v-for="(ingredient, index) in recipeIngredients"
                  :key="`${ingredient.id}-${index}`"
                  class="box">
                    <div class="col col-sm">
                      {{ index + 1 }}
                    </div>
                    <div class="col col-md">
                      {{ recipeIngredients[index].measure }}
                    </div>
                    <div class="col">
                      {{ recipeIngredients[index].title }}
                    </div>
                </div>
            </div>
            <div class="col-l">
              <div class="subtitle">Instructions</div>
              <div
                  v-for="(instruction, index) in recipe.strInstructions.split(/\r?\n/)"
                  :key="index"
                  class="box">
                    <div class="col col-sm">
                      {{ index + 1 }}
                    </div>
                    <div class="col col-xl">
                      {{ instruction }}
                    </div>
                </div>
            </div>
          </div>

      </div>
    </template>
  </AppLayout>
</template>

<style lang="scss" scoped>
@import "../assets/styles/index.scss";
.wrapper {
  padding: 10px;
}
.info {
  overflow: hidden;
  margin-bottom: 25px;
  font-size: 0.75rem;
  .image {
    float: left;
    height: 200px;
    margin-right: 25px;
  }
  .rating {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
  span:first-child {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    margin: 5px;
    padding: 0 0.75em;
    border-radius: 4px;
    background-color: #f4f4f4;
    color: #494949;
  }
  .tag {
    margin: 2px 3px;
  }
}
.ingredients {
  padding-bottom: 16px;
}
.box {
  display: flex;
  margin-bottom: 0.4rem;
  padding: 1.25rem;
  font-size: 14px;
  border-radius: 6px;
  box-shadow: 0px 2px 20px rgba(1, 41, 112, 0.1);
  &:hover {
    background-color: #f5f7fa;
  }
}

</style>