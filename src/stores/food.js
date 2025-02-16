import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { useUiStore } from "./ui";

export const useFoodStore = defineStore("food", () => {
  // other pinia stores
  const uiStore = useUiStore();
  
  const foodInfo = ref(null);
  const categories = ref(null);
  const availableCategoryList = ref(null) // all category came with foods

  // undeletable section
  const drinks = ref(null)
  const decert = ref(null)
  const extra_portion = ref(null)

  const selectedCategory = ref(0); //this is for identify the selected category
  const selectedFood = ref(null); //this is for identify the selected food item index form 'allSelectedCategoryItems'
  const selectedPotion = ref(0); //this is for identify the selected potion
  const allSelectedCategoryItems = ref([]);

  // rice and curry section
  const plainRice = ref(null)
  const curry = ref(null)
  const ricePack = ref(null)
  const selectedRicePack = ref(null)

  // functions
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

  function getAllCategory(){
    if(categories.value == null){
      axios.get(`${import.meta.env.VITE_url}/customer/cagegories`)
      .then((response) => {
        if(response.status == 200){
          categories.value = response.data;
          console.log(foodInfo.value)
        }
      })
      .catch((error) => {
        console.log(error)
    })
  }
  }



  return {
    foodInfo,
    categories,
    availableCategoryList,
    selectedFood,
    selectedPotion,

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
  };
});


// let category = [
//   {
//     id: 1,
//     name : 'drinks'
//   },
//   {
//     id: 2,
//     name : 'curry'
//   },
//   {
//     id: 3,
//     name : 'rice'
//   },
//   {
//     id: 4,
//     name : 'decert'
//   },
// ]


// let food = [
//   {
//     id : 10,
//     category_id : 1,
//     name : 'woeifjo'
//   },
//   {
//     id : 11,
//     category_id : 1,
//     name : 'weofjw'
//   },
//   {
//     id : 12,
//     category_id : 2,
//     name : 'roie'
//   },
//   {
//     id : 13,
//     category_id : 1,
//     name : 'weoif'
//   },
//   {
//     id : 14,
//     category_id : 2,
//     name : 'oidf'
//   },
//   {
//     id : 15,
//     category_id : 1,
//     name : 'woeifjo'
//   },
// ]