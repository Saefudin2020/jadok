<template>
  <page>
    <ActionBar :title="pasien.name">
      <NavigationButton
        android.systemIcon="ic_menu_back"
        @tap="$navigateBack"
      />
    </ActionBar>
    <FLexboxLayout flexDirection="row">
      <StackLayout class="p-20">
        <Image
          src="~/images/doctor-list.jpg"
          width="100"
          height="100"
          stretch="none"
        />
        <Label :text="pasien.name" class="h2 text-center" />
        <Label :text="pasien.umur" />
        <Label :text="pasien.kategori" />
        <ListView for="(riwayat,index) in pasien.riwayat">
          <v-template>
            <Span :text="riwayat.keluhan" />
            <Span :text="riwayat.gejala" />
          </v-template>
        </ListView>

        <Label text="Keluhan Pasien " />
        <TextField v-model="textFieldValue" hint="Enter text..." />

        <Label text="Gejala Pasien " />
        <TextField v-model="textFieldValue" hint="Enter text..." />

        <Label text="Obat yang dianjurkan " />
        <TextField v-model="textFieldValue" hint="Enter text..." />

        <Label text="Keterangan " />
        <TextField v-model="textFieldValue" hint="Enter text..." />

        <Button text="Rekam Data Pasien" @tap="onButtonTap" />
      </StackLayout>
    </FLexboxLayout>
  </page>
</template>

<script>
export default {
  props: ["pasien"],
  data() {
    return {};
  },
};
</script>

<style>
</style>