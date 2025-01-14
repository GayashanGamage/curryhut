import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", () => {
  const foodPopup = ref(false);
  const riceandcurryPopup = ref(false);

  // shop time related
  const shopOpen = ref(undefined);
  const shopClose = ref(undefined);
  const isShopClosed = ref(false);

  return {
    foodPopup,
    riceandcurryPopup,
    shopOpen,
    shopClose,
    isShopClosed,
  };
});
