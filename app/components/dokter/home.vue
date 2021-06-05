<template>
  <Page>
    <ActionBar title="Home">
      <NavigationButton android.systemIcon="ic_menu" @tap="onOpenDrawerTap" />
    </ActionBar>
    <ScrollView>
      <GridLayout rows="*" height="3500px">
        <RadSideDrawer ref="drawer">
          <StackLayout ~drawerContent backgroundColor="gray">
            <StackLayout
              height="60"
              style="text-align: center; vertical-align: center"
            >
              <Label text="Navigation Menu" />
            </StackLayout>
            <StackLayout>
              <Button
                text="Daftar Data Pasien"
                padding="10"
                backgroundColor="lightgray"
                @tap="$navigateTo(daftarpasien)"
              />
              <Button
                text="Rekam Medis Pasien"
                padding="10"
                @tap="$navigateTo(rekampasien)"
              />
              <Button
                text="Pengaturan"
                padding="10"
                @tap="$navigateTo(pengaturan)"
              />
            </StackLayout>
            <Label
              text="Close"
              color="lightgray"
              padding="10"
              style="horizontal-align: center"
              @tap="onCloseDrawerTap"
            />
          </StackLayout>

          <StackLayout ~mainContent>
            <Label
              :text="mainContentText"
              textWrap="true"
              fontSize="16"
              padding="10"
            />
            <Button
              text="Open Drawer"
              @tap="onOpenDrawerTap"
              margin="10"
              style="horizontal-align: left"
            />
          </StackLayout>
        </RadSideDrawer>
      </GridLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Vue from "nativescript-vue";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
Vue.use(RadSideDrawer);
import daftarpasien from "./daftarpasien";
import rekampasien from "./rekampasien";
import pengaturan from "./pengaturan";

export default {
  data() {
    return {
      msg: "Hello World",
      daftarpasien: daftarpasien,
      rekampasien: rekampasien,
      pengaturan: pengaturan,
    };
  },

  methods: {
    onOpenDrawerTap() {
      this.$refs.drawer.nativeView.showDrawer();
    },
    onCloseDrawerTap() {
      this.$refs.drawer.nativeView.closeDrawer();
    },
  },
};
</script>

<style scoped>
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.description-label {
  margin-bottom: 15;
}
</style>