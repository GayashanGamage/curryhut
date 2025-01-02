import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useOrderStore = defineStore("order", () => {
  const selectedItemCount = ref(1);

  // set a minimum value for selectedItemCount
  watch(selectedItemCount, (newVal) => {
    if (newVal < 1) {
      selectedItemCount.value = 1;
    }
  });

  return { selectedItemCount };
});
