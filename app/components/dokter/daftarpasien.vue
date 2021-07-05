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
import { mapActions } from "vuex";
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


      pasiens: [
        {
          id: 1,
          name: "Andi Riswandi",
          age: "40 Tahun",
          with_category_user: "Urgent",
        },

        {
          id: 2,
          name: "Elsa Alrsha",
          age: "45 Tahun",
          with_category_user: "Urgent",

        },

        {
          id: 3,
          name: "Casya rahasya",
          age: "38 Tahun",
          with_category_user: "Urgent",
        },
      ],
      home: home,
    };
  },
  async created(){
    try{
      const data = await this.getDataPasienRegisteredByDoctorID()
      this.pasiens = data
    }catch(err){
      console.log(err)
    }
    
  },
  methods: {
    onItemTap: function (index) {
      this.$navigateTo(Pasien, {
        props: {
          pasien: this.pasiens[index],
        },
      });
    },
    ...mapActions({
      getDataPasienRegisteredByDoctorID : "getDataPasienRegisteredByDoctorID",
    })
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