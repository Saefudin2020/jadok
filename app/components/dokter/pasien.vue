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
          <TextField v-model="issue" hint="Enter text..." />

          <Label text="Gejala Pasien " />
          <TextField v-model="symptomps" hint="Enter text..." />

          <Label text="Obat yang dianjurkan " />
          <TextField v-model="medicine" hint="Enter text..." />

          <Label text="Hasil Diagnosa " />
          <TextField v-model="results" hint="Enter text..." />

        <Button text="Rekam Data Pasien" @tap="register" />
      </StackLayout>
  </Page>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["pasien"],
  data() {
    return {
      issue : "",
      symptomps : "",
      medicine : "",
      results : ""
    };
  },
  methods : {
    async register(){
      await this.saveHistory({
        doctor_id : this.$store.state.doctorLoggedIn.id,
        checkup_date : new Date(),
        user_id : this.pasien.id,
        issue : this.issue, 
        symptomps : this.symptomps,
        results : this.results, 
        medicine : this.medicine
      }).then(()=>{
        alert("Data sudah berhasil diinput!")
      })
    },
    ...mapActions({
      saveHistory : "saveHistory"
    })
  }
};
</script>

<style>
</style>