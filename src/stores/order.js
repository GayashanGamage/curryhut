import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";
import { useUiStore } from "./ui";
import { useToast } from "vue-toast-notification";

export const useOrderStore = defineStore("order", () => {
  //this is for the quantity of the selected item in the order
  const selectedItemCount = ref(1);

  const curryCount = ref(0); //get how many couries selected
  // const curryAvailability = ref(true);

  // this is for the tempary selected item before add to the order list
  const temparyOrderItem = ref();
  /*{
      itemid: 1,
      foodid: 1001,
      quantity: 1,
      name: "Chicken Kottu",
      price: 350,
      rice : 'white'
      curry : [id, id, id]
    },*/

  // this is for the order list
  const order = ref([
    /*{
      id: 1,
      name: "Chicken Kottu",
      price: 350,
      quantity: 1,
    },*/
  ]);

  // check curryCount and disable curry availability
  watch(curryCount, (newCount) => {
    if (newCount == 4 || newCount >= 4) {
      const allEnabledActionButton =
        document.getElementsByClassName("action-button");
      for (let i = 0; i < allEnabledActionButton.length; i++) {
        allEnabledActionButton[i].disabled = true;
      }
    } else {
      const allEnabledActionButton =
        document.getElementsByClassName("action-button");
      for (let i = 0; i < allEnabledActionButton.length; i++) {
        allEnabledActionButton[i].disabled = false;
      }
    }
  });

  // set a minimum value for selectedItemCount
  watch(selectedItemCount, (newVal) => {
    if (newVal < 1) {
      selectedItemCount.value = 1;
    }
  });

  const addToOrder = () => {
    order.value.push(temparyOrderItem.value);
    temparyOrderItem.value = undefined;
    useUiStore().riceandcurryPopup = false;
    useOrderStore().curryCount = 0;
    useToast().open({
      message: "Item added to the order list",
      type: "success",
    });
  };

  return {
    selectedItemCount,
    curryCount,
    // curryAvailability,
    order,
    temparyOrderItem,
    addToOrder,
  };
});
