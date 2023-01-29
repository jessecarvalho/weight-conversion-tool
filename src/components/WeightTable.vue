<template>
  <div class="conversion-table mt-5">
    <h2 class="text-xl font-bold">Conversion Table</h2>
    <table class="table-fixed w-5/6 md:w-1/2 m-auto">
      <thead>
        <tr class="bg-blue-500 text-white">
          <th class="pt-3 pb-3">type</th>
          <th>quantity</th>
        </tr>
        <tr>
          <td>Kilograms</td>
          <td>{{ weight_info.kg_quantity }}</td>
        </tr>
        <tr>
          <td>Pounds</td>
          <td>{{ weight_info.pd_quantity }}</td>
        </tr>
        <tr>
          <td>pounds</td>
          <td>{{ weight_info.oz_quantity }}</td>
        </tr>
      </thead>
    </table>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["weight_info", "error_info"]),
  },
};
</script>
