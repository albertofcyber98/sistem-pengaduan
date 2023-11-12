<template>
  <div class="q-pa-md">
    <q-table title="SKPD" :rows="rows" :columns="columns" row-key="name" />
  </div>
</template>

<script>
import axios from "axios";
import { endpoints } from "src/constanta/endpoint";
export default {
  data() {
    return {
      columns: [
        {
          name: "name",
          required: true,
          label: "Nama",
          align: "left",
          field: "nama",
          format: (val) => `${val}`,
          sortable: true,
        },
      ],
      rows: [],
    };
  },
  created() {
    axios
      .get(`${endpoints}get_all_skpd.php`)
      .then((response) => {
        console.log(response);
        this.rows = response.data;
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
  },
};
</script>
