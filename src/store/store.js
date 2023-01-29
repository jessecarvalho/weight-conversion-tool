import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    weight_info: {
      kg_quantity: 0,
      pd_quantity: 0,
      oz_quantity: 0,
      weight_quantity: 0,
      selected_weight: "KG",
    },
    error_info: {
      error_disabled: true,
      error_message: "",
    },
  },
  mutations: {
    doCalc(state) {
      if (
        !isNaN(state.weight_info.weight_quantity) &&
        state.weight_info.weight_quantity.length > 0
      ) {
        state.error_info.error_disabled = true;
        state.error_info.error_message = "";
        if (state.weight_info.selected_weight == "KG") {
          state.weight_info.kg_quantity = state.weight_info.weight_quantity;
          state.weight_info.pd_quantity = (
            state.weight_info.weight_quantity * 2.20462262185
          ).toFixed(2);
          state.weight_info.oz_quantity = (
            state.weight_info.weight_quantity * 35.27
          ).toFixed(2);
        } else if (state.weight_info.selected_weight == "PD") {
          state.weight_info.kg_quantity = (
            state.weight_info.weight_quantity * 0.453592
          ).toFixed(2);
          state.weight_info.pd_quantity = state.weight_info.weight_quantity;
          state.weight_info.oz_quantity = (
            state.weight_info.weight_quantity * 16
          ).toFixed(2);
        } else if (state.weight_info.selected_weight == "OZ") {
          state.weight_info.kg_quantity = (
            state.weight_info.weight_quantity * 0.0283495
          ).toFixed(2);
          state.weight_info.pd_quantity = (
            state.weight_info.weight_quantity * 0.0625
          ).toFixed(2);
          state.weight_info.oz_quantity = state.weight_info.weight_quantity;
        }
      } else if (state.weight_info.weight_quantity.length == 0) {
        state.weight_info.kg_quantity = 0;
        state.weight_info.pd_quantity = 0;
        state.weight_info.oz_quantity = 0;
      } else {
        state.error_info.error_disabled = false;
        state.error_info.error_message =
          "Quantity is invalid, please use a number instead";
      }
    },
  },
});

export default store;
