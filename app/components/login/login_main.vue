<template>
  <Page>
    <ActionBar borderColor="lightcyan" title="Jadwal Dokter Spesialist Paru" />
    <GridLayout columns="*,*]" rows="*,*" horizontalAlignment="center">
      <Image
        src=" ~/image/dokter.png "
        loadMode=" async "
        stretch="none"
      ></Image>
      <Button
        col=" 0 "
        row=" 0 "
        text=" Dokter "
        @tap="$navigateTo(login_doc)"
        backgroundColor="#43b883"
      />

      <Image
        col="0"
        row=" 2 "
        src=" ~/image/pasien.png "
        loadMode="
            async "
        stretch="none"
      >
      </Image>

      <Button
        col=" 0 "
        row=" 7 "
        text=" Pasien "
        @tap="$navigateTo(login_pas)"
        backgroundColor="#43b883"
      />
    </GridLayout>
  </Page>
</template>

<script>
import { mapActions } from "vuex";
import login_doc from "./login_doc";
import login_pas from "./login_pas";
export default {
  data() {
    return {
      msg: "Hello World",
      login_doc: login_doc,
      login_pas: login_pas,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions(["init"]),
  },
};
</script>

<style scoped>
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.page {
  align-items: center;
  flex-direction: column;
}

.description-label {
  margin-bottom: 15;
}
</style>