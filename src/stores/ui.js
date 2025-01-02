import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUiStore = defineStore("ui", () => {
  const foodPopup = ref(false);
  return { foodPopup };
});
