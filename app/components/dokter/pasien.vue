<template>
  <Page>
    <ActionBar :title="pasien.name">
      <NavigationButton
        android.systemIcon="ic_menu_back"
        @tap="$navigateBack"
      />
    </ActionBar>
      <StackLayout class="p-20">
        <Image
          src="~/images/doctor-list.jpg"
          width="100"
          height="100"
          stretch="none"
        />
        <Label :text="pasien.name" class="h2 text-center" />
        <Label textWrap="true">
          <FormattedString class="text-center">
            <Span text="Umur : "/>
            <Span :text="pasien.age" />
          </FormattedString>
        </Label>
        <Label textWrap="true">
          <FormattedString class="text-center">
            <Span text="Kategori : "/>
            <Span :text="pasien.with_category_user" />
          </FormattedString>
        </Label>
       
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
  </Page>
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