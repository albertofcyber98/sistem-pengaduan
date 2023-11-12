<template>
  <div class="q-pa-md">
    <form @submit.prevent="createPelaporan" enctype="multipart/form-data">
      <q-input
        name="nama_terlapor"
        outlined
        v-model="nama_terlapor"
        label="Nama Terlapor"
        class="q-mb-sm"
      />
      <q-select
        outlined
        v-model="model_jenis_laporan"
        option-value="nama"
        option-label="nama"
        name="jenis_laporan"
        :options="row_jenis_laporan"
        label="Jenis Laporan"
        class="q-mb-sm"
      />
      <input type="file" name="bukti" id="bukti" class="q-mb-sm">
      <q-select
        outlined
        v-model="model_skpd"
        option-value="nama"
        option-label="nama"
        name="skpd"
        :options="row_skpd"
        label="SKPD"
        class="q-mb-sm"
      />
      <q-input outlined v-model="jabatan" label="Jabatan" name="jabatan" class="q-mb-sm" />
      <p class="text-center text-red" v-show="message">Ekstensi file docx!!!</p>
      <q-btn color="secondary" type="submit" label="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import { endpoints } from "../constanta/endpoint";
export default {
  data() {
    return {
      model_jenis_laporan: ref(null),
      model_skpd: ref(null),
      row_jenis_laporan: [],
      row_skpd: [],
      nama_terlapor:'',
      jabatan:'',
      message:false
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
  methods: {
    async createPelaporan(event) {
      const fileInput = document.getElementById('bukti');
      const file = fileInput.files[0];
      const checkDocument = file.name
      const fileExtension = checkDocument.split('.').pop();
      if(fileExtension != 'docx'){
        this.message = true;
        setTimeout(() => {
          this.message = false;
        }, 2000);
        return
      }
      const els = event.target.elements;
      const nama_terlapor = els.nama_terlapor.value
      const jabatan = els.jabatan.value
      const jenis_laporan = els.jenis_laporan.value
      const skpd = els.skpd.value
      const formData = new FormData();
      formData.append('jenis_laporan', jenis_laporan);
      formData.append('username', 'root');
      formData.append('skpd', skpd);
      formData.append('jabatan', jabatan);
      formData.append('nama_terlapor', nama_terlapor);
      formData.append('bukti', file);
      const result = await axios.post(
        `${endpoints}post_pengaduan.php`,
        formData,
      );
      const response = result.data.response
      if (response == "success") {
        this.$router.push("/laporan-user");
      }
    }
  },
};
</script>
