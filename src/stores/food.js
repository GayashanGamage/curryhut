import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useFoodStore = defineStore("food", () => {
  const foodInfo = ref([
    {
      id: 51,
      categoryId: "abc1",
      categoryName: "koththu",
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      name: "Chicken koththu",
      description:
        "Tender roasted chicken mixed with soft, flaky roti, fresh vegetables, and a blend of spices for a hearty and flavorful Sri Lankan street food experience.",
      size: [
        {
          name: "small",
          price: 1200,
          portion: "1 person",
        },
        {
          name: "medium",
          price: 1500,
          portion: "2 person",
        },
      ],
    },
    {
      id: 52,
      categoryId: "abc2",
      categoryName: "fried rice",
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      name: "Cheese koththu",
      description:
        "Tender roasted chicken mixed with soft, flaky roti, fresh vegetables, and a blend of spices for a hearty and flavorful Sri Lankan street food experience.",
      size: [
        {
          name: "medium",
          price: 1800,
          portion: "2 person",
        },
        {
          name: "large",
          price: 2500,
          portion: "4 person",
        },
      ],
    },
    {
      id: 53,
      categoryId: "abc3",
      categoryName: "chopsuey rice",
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      name: "Mutten koththu",
      description:
        "Tender roasted chicken mixed with soft, flaky roti, fresh vegetables, and a blend of spices for a hearty and flavorful Sri Lankan street food experience.",
      size: [
        {
          name: "small",
          price: 800,
          portion: "1 person",
        },
        {
          name: "medium",
          price: 1200,
          portion: "2 person",
        },
      ],
    },
    {
      id: 54,
      categoryId: "abc4",
      categoryName: "noodles",
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      name: "Egg koththu",
      description:
        "Tender roasted chicken mixed with soft, flaky roti, fresh vegetables, and a blend of spices for a hearty and flavorful Sri Lankan street food experience.",
      size: [
        {
          name: "small",
          price: 2200,
          portion: "2 person",
        },
        {
          name: "medium",
          price: 4000,
          portion: "4 person",
        },
      ],
    },
    {
      id: 55,
      categoryId: "abc5",
      categoryName: "nasigauran",
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      name: "Vegi koththu",
      description:
        "Tender roasted chicken mixed with soft, flaky roti, fresh vegetables, and a blend of spices for a hearty and flavorful Sri Lankan street food experience.",
      size: [
        {
          name: "small",
          price: 200,
          portion: "1 person",
        },
        {
          name: "medium",
          price: 500,
          portion: "2 person",
        },
      ],
    },
    {
      id: 56,
      categoryId: "abc1",
      categoryName: "koththu",
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      name: "Chicken koththu",
      description:
        "Tender roasted chicken mixed with soft, flaky roti, fresh vegetables, and a blend of spices for a hearty and flavorful Sri Lankan street food experience.",
      size: [
        {
          name: "small",
          price: 1200,
          portion: "1 person",
        },
        {
          name: "medium",
          price: 1500,
          portion: "2 person",
        },
      ],
    },
    {
      id: 57,
      categoryId: "abc2",
      categoryName: "fried rice",
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      name: "Cheese koththu",
      description:
        "Tender roasted chicken mixed with soft, flaky roti, fresh vegetables, and a blend of spices for a hearty and flavorful Sri Lankan street food experience.",
      size: [
        {
          name: "medium",
          price: 1800,
          portion: "2 person",
        },
        {
          name: "large",
          price: 2500,
          portion: "4 person",
        },
      ],
    },
    {
      id: 58,
      categoryId: "abc3",
      categoryName: "chopsuey rice",
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      name: "Mutten koththu",
      description:
        "Tender roasted chicken mixed with soft, flaky roti, fresh vegetables, and a blend of spices for a hearty and flavorful Sri Lankan street food experience.",
      size: [
        {
          name: "small",
          price: 800,
          portion: "1 person",
        },
        {
          name: "medium",
          price: 1200,
          portion: "2 person",
        },
      ],
    },
    {
      id: 59,
      categoryId: "abc4",
      categoryName: "noodles",
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      name: "Egg koththu",
      description:
        "Tender roasted chicken mixed with soft, flaky roti, fresh vegetables, and a blend of spices for a hearty and flavorful Sri Lankan street food experience.",
      size: [
        {
          name: "small",
          price: 2200,
          portion: "2 person",
        },
        {
          name: "medium",
          price: 4000,
          portion: "4 person",
        },
      ],
    },
    {
      id: 60,
      categoryId: "abc12",
      categoryName: "extra",
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      name: "Pork",
      description:
        "Tender roasted chicken mixed with soft, flaky roti, fresh vegetables, and a blend of spices for a hearty and flavorful Sri Lankan street food experience.",
      size: [
        {
          name: "small",
          price: 600,
          portion: "2 person",
        },
        {
          name: "medium",
          price: 1200,
          portion: "4 person",
        },
      ],
    },
    {
      id: 61,
      categoryId: "abc13",
      categoryName: "extra",
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      name: "Bullsey",
      description:
        "Tender roasted chicken mixed with soft, flaky roti, fresh vegetables, and a blend of spices for a hearty and flavorful Sri Lankan street food experience.",
      size: [
        {
          name: "small",
          price: 800,
          portion: "1 person",
        },
        {
          name: "medium",
          price: 1400,
          portion: "2 person",
        },
      ],
    },
    {
      id: 62,
      categoryId: "abc5",
      categoryName: "nasigauran",
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      name: "Vegi koththu",
      description:
        "Tender roasted chicken mixed with soft, flaky roti, fresh vegetables, and a blend of spices for a hearty and flavorful Sri Lankan street food experience.",
      size: [
        {
          name: "small",
          price: 200,
          portion: "1 person",
        },
        {
          name: "medium",
          price: 500,
          portion: "2 person",
        },
      ],
    },
    // drinks
    {
      id: 63,
      categoryId: "abc14",
      categoryName: "drinks",
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      name: "Coca cola",
      description:
        "Tender roasted chicken mixed with soft, flaky roti, fresh vegetables, and a blend of spices for a hearty and flavorful Sri Lankan street food experience.",
      size: [
        {
          name: "pet",
          price: 100,
          portion: "1 person",
        },
        {
          name: "buddy",
          price: 150,
          portion: "2 person",
        },
        {
          name: "mega",
          price: 240,
          portion: "4 person",
        },
      ],
    },
    {
      id: 63,
      categoryId: "abc15",
      categoryName: "drinks",
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      name: "Sprite",
      description:
        "Tender roasted chicken mixed with soft, flaky roti, fresh vegetables, and a blend of spices for a hearty and flavorful Sri Lankan street food experience.",
      size: [
        {
          name: "pet",
          price: 100,
          portion: "1 person",
        },
        {
          name: "jumbo",
          price: 250,
          portion: "4 person",
        },
      ],
    },
    // decert section
    {
      id: 64,
      categoryId: "abc16",
      categoryName: "decert",
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      name: "Ice cream",
      description:
        "Tender roasted chicken mixed with soft, flaky roti, fresh vegetables, and a blend of spices for a hearty and flavorful Sri Lankan street food experience.",
      size: [
        {
          name: "vanila",
          price: 120,
          portion: "1 person",
        },
        {
          name: "chocolate",
          price: 120,
          portion: "1 person",
        },
        {
          name: "strawberry",
          price: 130,
          portion: "1 person",
        },
      ],
    },
    {
      id: 65,
      categoryId: "abc17",
      categoryName: "decert",
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      name: "Mari biscuit pudding",
      description:
        "Tender roasted chicken mixed with soft, flaky roti, fresh vegetables, and a blend of spices for a hearty and flavorful Sri Lankan street food experience.",
      size: [
        {
          name: "regular cup",
          price: 150,
          portion: "1 person",
        },
      ],
    },
    // rice and curry
    {
      id: 101,
      categoryId: "abc11",
      categoryName: "rice&curry",
      special: "vegitable",
      name: "rice and curry",
      price: 250,
    },
    {
      id: 102,
      categoryId: "abc11",
      categoryName: "rice&curry",
      special: "fish",
      name: "rice and curry + fish",
      price: 320,
    },
    {
      id: 103,
      categoryId: "abc11",
      categoryName: "rice&curry",
      special: "chicken",
      name: "rice and curry + checken",
      price: 350,
    },
    // rice category
    {
      id: 66,
      categoryId: "abc6",
      categoryName: "rice",
      name: "white rice",
    },
    {
      id: 67,
      categoryId: "abc6",
      categoryName: "rice",
      name: "red rice",
    },
    // curry category
    {
      id: 68,
      categoryId: "abc7",
      categoryName: "curry",
      name: "polsambol",
    },
    {
      id: 69,
      categoryId: "abc7",
      categoryName: "curry",
      name: "potato curry",
    },
    {
      id: 70,
      categoryId: "abc7",
      categoryName: "curry",
      name: "dhal curry",
    },
    {
      id: 71,
      categoryId: "abc7",
      categoryName: "curry",
      name: "kohila curry",
    },
    {
      id: 72,
      categoryId: "abc7",
      categoryName: "curry",
      name: "polos curry",
    },
  ]);

  const uniqueCategories = [
    ...new Set(foodInfo.value.map((item) => item.categoryName)),
  ].filter(
    (category) =>
      !["rice&curry", "extra", "rice", "curry", "drinks", "decert"].includes(
        category
      )
  );

  const selectedCategory = ref(0); //this is for identify the selected category
  const selectedFood = ref(null); //this is for identify the selected food item index form 'allSelectedCategoryItems'
  const selectedPotion = ref(0); //this is for identify the selected potion
  const allSelectedCategoryItems = ref([]);

  watch(selectedCategory, (newVal) => {
    allSelectedCategoryItems.value = foodInfo.value.filter(
      (item) => item.categoryName === uniqueCategories[newVal]
    );
  });

  return {
    foodInfo,
    selectedFood,
    selectedPotion,
    uniqueCategories,
    selectedCategory,
    allSelectedCategoryItems,
  };
});

/*
how I'm going to access to food info and add to cart (order):

main foods : 
load all data into 'mainFood' array. then filter the data according to the category name
once we select item it load to 'selectedFood' and 'selectedPotion' arrays
then it transfer to order

curry :
load all data into 'curry' array. then loop thrue that


rice :
load all data into 'rice' array. then loop thrue that



*/
