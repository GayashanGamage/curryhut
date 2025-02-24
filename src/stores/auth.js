import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthonticationStore = defineStore("authontication", () => {
    const mobile = ref(null)
    const user_key = ref(null)

  return {
    mobile,
    user_key
  };
});
