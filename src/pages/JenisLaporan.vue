<template>
  <div class="q-pa-md">
    <q-table
      title="Jenis Laporan"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
</template>

<script>
import axios from "axios";
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
      .get("https://wbspangkep.my.id/api/get_all_jenis_laporan.php")
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
