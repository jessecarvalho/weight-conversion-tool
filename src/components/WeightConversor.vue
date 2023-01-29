<template>
  <div class="weight-attributes w-5/6 md:w-1/2 m-auto">
    <div
      class="bg-red-500 rounded-sm pt-3 pb-3 mb-5"
      v-bind:class="{ hidden: error_info.error_disabled }"
    >
      <p class="text-white">{{ error_info.error_message }}</p>
    </div>
    <div class="grid grid-cols-2 grid-flow-col gap-2">
      <div>
        <label
          for="last_name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Weight</label
        >
        <input
          type="text"
          id="weight"
          v-model="local_weight_info.weight_quantity"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Weight"
          required
        />
      </div>
      <div>
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Measurement</label
        >
        <select
          v-model="local_weight_info.selected_weight"
          id="countries"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="KG" selected>Kilograms</option>
          <option value="PD">Pounds</option>
          <option value="OZ">Ounces</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["weight_info", "error_info"]),
    local_weight_info: {
      get() {
        return this.weight_info;
      },
      set(value) {
        this.doCalc(value);
      },
    },
  },
  methods: {
    ...mapMutations(["doCalc"]),
  },
  watch: {
    "local_weight_info.selected_weight": {
      handler: "doCalc",
      imediate: true,
      deep: true,
    },
    "local_weight_info.weight_quantity": {
      handler: "doCalc",
      imediate: true,
      deep: true,
    },
  },
};
</script>
