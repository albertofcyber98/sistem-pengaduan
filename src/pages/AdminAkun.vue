<template>
  <div class="q-pa-md">
    <q-table
      title="Data Akun Admin"
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
          name: "username",
          required: true,
          label: "Username",
          align: "left",
          field: "username",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "nama",
          required: true,
          label: "Nama",
          align: "left",
          field: "nama",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "jenis_kelamin",
          required: true,
          label: "Jenis Kelamin",
          align: "left",
          field: "jenis_kelamin",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "no_telpon",
          required: true,
          label: "No Telpon",
          align: "left",
          field: "no_telpon",
          format: (val) => `${val}`,
          sortable: true,
        },
      ],
      rows: [],
    };
  },
  created() {
    axios
      .get("https://wbspangkep.my.id/api/get_all_admin.php")
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
