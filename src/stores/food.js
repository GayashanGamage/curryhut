import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { useUiStore } from "./ui";
import router from "@/router";

export const useFoodStore = defineStore("food", () => {
  // other pinia stores
  const uiStore = useUiStore();
  
  const foodInfo = ref(null);
  const categories = ref(null);
  // const availableCategoryList = ref(null) // all category came with foods
  
  // undeletable section
  const drinks = ref(null)
  const decert = ref(null)
  const extra_portion = ref(null)
  
  const selectedCategory = ref(0); //this is for identify the selected category for styling
  const selectedCategoryId = ref(null); // this is use for load the selected category food items
  const selectedFood = ref(null); //this is for identify the selected food item index form 'allSelectedCategoryItems'
  const selectedPotion = ref(0); //this is for identify the selected potion
  const allSelectedCategoryItems = ref([]);
  const selectedFoodCategoryList = ref(null)
  
  // rice and curry section
  const plainRice = ref(null)
  const curry = ref(null)
  const ricePack = ref(null)
  const selectedRicePack = ref(null)
  
  // functions
  // get all deletable foods accoring to timly manner
  function getAllDeletableFoods(){
    axios
    .get(`${import.meta.env.VITE_url}/customer/`)
    .then((response) => {
      if(response.data.availability === false){
        uiStore.mainProductSection = false
      }else if (response.data.availability === true){
        uiStore.mainProductSection = true
        foodInfo.value = response.data.data;
      }
    })
    .catch((error) => {
      if (error.status === 403) {
        uiStore.shopClose = error.response.data["close_time"];
        uiStore.shopOpen = error.response.data["open_time"];
        router.push("/closed");
      }
    });
  }

  // get all rice and curry list
  function getFoodList(){
    axios.get(`${import.meta.env.VITE_url}/customer/riceAndCurry`)
    .then((response) => {
      plainRice.value = response.data.rice
      curry.value = response.data.curry 
      ricePack.value = response.data['rice&curry']
      uiStore.bugetPack = true
      console.log()
    })
    .catch((error) => {
      console.log(error)
    })
  }

  function sortCategories(categoryList) {
    categories.value = [
      ...new Map(
        foodInfo.value
          .map(food => {
            let category = categoryList.find(category => category.id === food.category_id);
            return category ? { id: category.id, name: category.name } : null;
          })
          .filter(item => item !== null) // Remove null values
          .map(item => [item.id, item]) // Convert to key-value pairs for Map
      ).values() // Extract unique values
    ];
    selectedCategoryId.value = categories.value[0].id
    selectedFoodCategoryList.value  = foodInfo.value.filter((food) => food.category_id === categories.value[0].id)
}



  function getAllCategory(){
    if(categories.value == null){
      axios.get(`${import.meta.env.VITE_url}/customer/cagegories`)
      .then((response) => {
        if(response.status == 200){
          // categories.value = response.data;
          if(foodInfo.value != null){
            sortCategories(response.data)
          }else{
            getAllDeletableFoods()
          }
          sortCategories(response.data)
        }
      })
      .catch((error) => { 
        console.log(error)
    })
  }
  }

  watch(selectedCategoryId.value, (newId) => {
    console.log(newId)
    selectedDeletableFoodCategory.value = foodInfo.value.filter((food) => food.category_id === newId)
  })




  return {
    foodInfo,
    categories,
    // availableCategoryList,
    selectedFood,
    selectedPotion,
    selectedCategoryId,
    selectedFoodCategoryList,

    // undeletable section
    drinks,
    decert,
    extra_portion,


    plainRice,
    curry,
    ricePack,
    selectedRicePack,

    // uniqueCategories,
    selectedCategory,
    allSelectedCategoryItems,

    // functions
    getFoodList,
    getAllCategory,
    getAllDeletableFoods,
  };
});
