import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useFoodStore = defineStore("food", () => {
  const foodInfo = ref(null);
  const categories = ref(null);
  
  const selectedCategory = ref(0); //this is for identify the selected category
  const selectedFood = ref(null); //this is for identify the selected food item index form 'allSelectedCategoryItems'
  const selectedPotion = ref(0); //this is for identify the selected potion
  const allSelectedCategoryItems = ref([]);

  // new start --------------------------
  // rice and curry section
  const plainRice = ref(null)
  const curry = ref(null)
  const ricePack = ref(null)
  const selectedRicePack = ref(null)



  return {
    foodInfo,
    categories,
    selectedFood,
    selectedPotion,

    plainRice,
    curry,
    ricePack,
    selectedRicePack,

    // uniqueCategories,
    selectedCategory,
    allSelectedCategoryItems,
  };
});

