<template>
  <header-info></header-info>

  <main class="text-center">
    <weight-conversor></weight-conversor>
    <weight-table></weight-table>
  </main>
</template>

<script>
import HeaderInfo from "./components/HeaderInfo.vue";
import WeightConversor from "./components/WeightConversor.vue";
import WeightTable from "./components/WeightTable.vue";

export default {
  components: {
    HeaderInfo,
    WeightConversor,
    WeightTable,
  },
};
</script>
