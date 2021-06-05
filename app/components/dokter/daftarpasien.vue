<template>
  <Page>
    <ActionBar title="Daftar Pasien">
      <NavigationButton
        android.systemIcon="ic_menu_back"
        @tap="$navigateTo(home)"
      />
    </ActionBar>
    <StackLayout class="p-20">
      <Label text="Daftar Pasien" class="h2 text-center" />

      <ListView for="(pasien, index) in pasiens">
        <v-template>
          <Label :text="pasien.name" class="pasien" @tap="onItemTap(index)" />
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>
import Pasien from "./pasien";

import RadDataForm from "nativescript-ui-dataform/vue";
Vue.use(RadDataForm);

import Vue from "nativescript-vue";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
Vue.use(RadSideDrawer);
import home from "./home";

export default {
  data() {
    return {
      textFieldValue: "",

      pasiens: [
        {
          id: 1,
          name: "Andi Riswandi",
          umur: "40 Tahun",
          kategori: "Urgent",
          riwayat: [
            {
              keluhan: "Batuk sudah 4 minggu",
              gejala: "belum pernah periksa dokter",
            },
          ],
        },

        {
          id: 2,
          name: "Elsa Alrsha",
          umur: "45 Tahun",
          kategori: "Urgent",
          riwayat: [
            {
              keluhan: "batuk berdarah",
              gejala: "pernah terkena flex paru-paru",
            },
          ],
        },

        {
          id: 3,
          name: "Casya rahasya",
          umur: "38 Tahun",
          kategori: "Urgent",
          riwayat: [
            {
              keluhan: "Batuk Berlendir",
              gejala: "punya penyakit paru-paru basah",
            },
          ],
        },
      ],
      home: home,
    };
  },
  methods: {
    onItemTap: function (index) {
      this.$navigateTo(Pasien, {
        props: {
          pasien: this.pasiens[index],
        },
      });
    },
  },
};
</script>

<style scoped>
.pasien {
  margin: 10;
  font-size: 24;
  color: green;
}
</style>