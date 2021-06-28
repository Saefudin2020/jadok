<template>
  <Page>
    <ActionBar title="Jadwal Dokter">
      <NavigationButton
        android.systemIcon="ic_menu_back"
        @tap="$navigateTo(home)"
      />
    </ActionBar>
    <StackLayout class="p-20">
      <ScrollView height="600px">
        <Label text="Daftar Dokter Spesialist" class="h2 text-center" />
        <ListView for="(dokter, index) in dokters">
          <v-template>
            <Label :text="dokter.name" class="dokter" @tap="onItemTap(index)" />
          </v-template>
        </ListView>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>
import Dokter from "./list_dokter";

import Vue from "nativescript-vue";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
Vue.use(RadSideDrawer);
import home from "./home";

export default {
  data() {
    return {
      dokters: [
        {
          id: 1,
          name: "Dr. Alexander Cahya",
          description: "Senin dan Kamis, Pukul 09.00 - 12.00",
          max_patient: 3,
          pasien: [
            {
              name: "Pasien 1",
              umur: "40 Tahun",
              kategori: "urgent",
            },
          ],
        },
        {
          id: 2,
          name: "Dr. Patrick Zorra",
          description: "Senin dan Kamis, Pukul 09.00 - 12.00",
          max_patient: 3,
          pasien: [
            {
              name: "Pasien 1",
              umur: "40 Tahun",
              kategori: "urgent",
            },
          ],
        },
        {
          id: 3,
          name: "Dr. Vincent Erlangga",
          description : "Senin dan Kamis, Pukul 09.00 - 12.00",
          max_patient: 3,
          pasien: [
            {
              name: "Pasien 1",
              umur: "40 Tahun",
              kategori: "urgent",
            },
          ],
        },
      ],
      home: home,
    };
  },
  methods: {
    onItemTap: function (index) {
      this.$navigateTo(Dokter, {
        props: {
          dokter: this.dokters[index],
        },
      });
    },
  },
};
</script>

<style scoped>
.dokter {
  margin: 10;
  font-size: 24;
  color: green;
}
</style>