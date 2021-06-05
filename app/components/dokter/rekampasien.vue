<template>
  <Page>
    <ActionBar title="Data Pasien">
      <NavigationButton
        android.systemIcon="ic_menu_back"
        @tap="$navigateTo(home)"
      />
    </ActionBar>

    <StackLayout>
      <Label text="Keluhan Pasien " class="h3" />
      <TextField v-model="textFieldValue" hint="Enter text..." />

      <Label text="Gejala Pasien " />
      <TextField v-model="textFieldValue" hint="Enter text..." />

      <Label text="Obat yang dianjurkan " />
      <TextField v-model="textFieldValue" hint="Enter text..." />

      <Label text="Keterangan " />
      <TextField v-model="textFieldValue" hint="Enter text..." />

      <Button text="Rekam Data Pasien" @tap="onButtonTap" />
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
      home: home,
    };
  },

  methods: {
    onButtonTap() {
      console.log("Button was pressed");
    },

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

<style>
</style>