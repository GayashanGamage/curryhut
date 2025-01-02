import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useFoodStore = defineStore("food", () => {
  const selectedFood = ref(null);
  const selectedPotion = ref(0);
  const foodInfo = ref([
    {
      id: 0,
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      alt: "koththu",
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
      id: 1,
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      alt: "koththu",
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
      id: 2,
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      alt: "koththu",
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
      id: 3,
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      alt: "koththu",
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
      id: 4,
      image:
        "https://curryhut.blr1.cdn.digitaloceanspaces.com/sample-images/koththu.webp",
      alt: "koththu",
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
  ]);
  return { foodInfo, selectedFood, selectedPotion };
});
