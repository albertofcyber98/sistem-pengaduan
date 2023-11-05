<template>
  <div class="q-pa-md">
    <q-select
      v-model="model_jenis_laporan"
      option-value="nama"
      option-label="nama"
      :options="row_jenis_laporan"
      label="Jenis Laporan"
    />
    <q-select
      v-model="model_skpd"
      option-value="nama"
      option-label="nama"
      :options="row_skpd"
      label="SKPD"
    />
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
export default {
  data() {
    return {
      model_jenis_laporan: ref(null),
      model_skpd: ref(null),
      row_jenis_laporan: [],
      row_skpd: [],
    };
  },
  created() {
    axios
      .get("https://wbspangkep.my.id/api/get_all_jenis_laporan.php")
      .then((response) => {
        console.log(response);
        this.row_jenis_laporan = response.data;
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
    axios
      .get("https://wbspangkep.my.id/api/get_all_skpd.php")
      .then((response) => {
        console.log(response);
        this.row_skpd = response.data;
      })
      .catch((error) => {
        console.error("Axios error:", error);
      });
  },
};
</script>
