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
            <Label :text="dokter.fullname" class="dokter" @tap="onItemTap(index)" />
          </v-template>
        </ListView>
      </ScrollView>
    </StackLayout>
  </Page>
</template>

<script>
import { mapActions } from "vuex";
import Dokter from "./list_dokter";

import Vue from "nativescript-vue";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
Vue.use(RadSideDrawer);
import home from "./home";

export default {
  data() {
    return {
      dokters: [],
      home: home,
    };
  },
  async created(){
    const {with_category_user} = this.$store.state.userLoggedIn
    this.dokters = await this.getDataDoctorsByCategory(with_category_user) 
    console.log(this.dokters)
  },
  methods: {
    onItemTap: function (index) {
      this.$navigateTo(Dokter, {
        props: {
          dokter: this.dokters[index],
        },
      });
    },
    ...mapActions({
        getDataDoctorsByCategory : "getDataDoctorsByCategory"
    })
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