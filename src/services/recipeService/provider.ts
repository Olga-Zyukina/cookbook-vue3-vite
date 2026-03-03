import axios from "axios"
import { URL_RECIPES_BY_LETTER, URL_RECIPES_BY_ID, URL_RECIPES_BY_AREA, URL_RECIPES_BY_CATEGORY } from '../../constants'

export const getAllRecipes = async () => {
  const data = await axios.get(`${URL_RECIPES_BY_LETTER}`);
  return data?.data?.meals
};

// export const getRecipesByLetter = async (id: string) => {
//   const data = await axios.get(`${URL_RECIPES_BY_LETTER}${id}`);
//   return data?.data?.meals
// };

export const getRecipesById = async (id: string) => {
  const data = await axios.get(`${URL_RECIPES_BY_ID}${id}`);
  return data?.data?.meals[0];
};

export const getRecipesByArea = async (id: string) => {
  const data = await axios.get(`${URL_RECIPES_BY_AREA}${id}`);
  return data?.data?.meals
};

export const getRecipesByCategory = async (id: string) => {
  const data = await axios.get(`${URL_RECIPES_BY_CATEGORY}${id}`);
  return data?.data?.meals
};