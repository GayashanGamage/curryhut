import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useFoodStore = defineStore("food", () => {
  const foodInfo = ref(null);
  const categories = ref(null);
  // const foodInfo = ref([
  //   {
  //     id: 51,
  //     categoryId: "abc1",
  //     categoryName: "koththu",
  //     image:
  //       "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
  //     name: "Chicken koththu",
  //     description:
  //       "Tender roasted chicken mixed with soft, flaky roti, fresh vegetables, and a blend of spices for a hearty and flavorful Sri Lankan street food experience.",
  //     size: [
  //       {
  //         name: "small",
  //         price: 1200,
  //         portion: "1 person",
  //       },
  //       {
  //         name: "medium",
  //         price: 1500,
  //         portion: "2 person",
  //       },
  //     ],
  //   },
    
  //   // rice and curry
  //   {
  //     id: 101,
  //     categoryId: "abc11",
  //     categoryName: "rice&curry",
  //     special: "vegitable",
  //     name: "rice and curry",
  //     price: 250,
  //   },
  //   {
  //     id: 102,
  //     categoryId: "abc11",
  //     categoryName: "rice&curry",
  //     special: "fish",
  //     name: "rice and curry + fish",
  //     price: 320,
  //   },
  //   {
  //     id: 103,
  //     categoryId: "abc11",
  //     categoryName: "rice&curry",
  //     special: "chicken",
  //     name: "rice and curry + checken",
  //     price: 350,
  //   },
  //   // rice category
  //   {
  //     id: 66,
  //     categoryId: "abc6",
  //     categoryName: "rice",
  //     name: "white rice",
  //   },
  //   {
  //     id: 67,
  //     categoryId: "abc6",
  //     categoryName: "rice",
  //     name: "red rice",
  //   },
  //   // curry category
  //   {
  //     id: 68,
  //     categoryId: "abc7",
  //     categoryName: "curry",
  //     name: "polsambol",
  //   },
  //   {
  //     id: 69,
  //     categoryId: "abc7",
  //     categoryName: "curry",
  //     name: "potato curry",
  //   },
  // ]);

  // const uniqueCategories = [
  //   ...new Set(foodInfo.value.map((item) => item.categoryName)),
  // ].filter(
  //   (category) =>
  //     !["rice&curry", "extra", "rice", "curry", "drinks", "decert"].includes(
  //       category
  //     )
  // );

  const selectedCategory = ref(0); //this is for identify the selected category
  const selectedFood = ref(null); //this is for identify the selected food item index form 'allSelectedCategoryItems'
  const selectedPotion = ref(0); //this is for identify the selected potion
  const allSelectedCategoryItems = ref([]);

  // watch(selectedCategory, (newVal) => {
  //   allSelectedCategoryItems.value = foodInfo.value.filter(
  //     (item) => item.categoryName === uniqueCategories[newVal]
  //   );
  // });

  return {
    foodInfo,
    categories,
    selectedFood,
    selectedPotion,
    // uniqueCategories,
    selectedCategory,
    allSelectedCategoryItems,
  };
});

