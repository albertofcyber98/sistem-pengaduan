<template>
  <div class="q-pa-md">
    <q-table
      title="List Laporan"
      :rows="rows"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:body-cell="props">
        <q-td :props="props">
          <div v-if="props.value == 'pending'">
            <q-badge color="yellow" text-color="black" :label="props.value" />
          </div>
          <div v-else-if="props.value == 'finish'">
            <q-badge color="green" text-color="white" :label="props.value" />
          </div>
          <div v-else>
            {{ props.value }}
          </div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      columns: [
        {
          name: "jenis_laporan",
          required: true,
          label: "Jenis Laporan",
          align: "left",
          field: "jenis_laporan",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "skpd",
          required: true,
          label: "SKPD",
          align: "left",
          field: "skpd",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "jabatan",
          required: true,
          label: "Jabatan",
          align: "left",
          field: "jabatan",
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: "status",
          required: true,
          label: "Status",
          align: "left",
          field: "status",
          format: (val) => `${val}`,
          sortable: true,
        },
      ],
      rows: [],
    };
  },
  created() {
    axios
      .get("https://wbspangkep.my.id/api/get_all_laporan.php")
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
