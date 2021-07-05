<template>
    <Page>
        <ActionBar title="Rekam Medis">
            <NavigationButton android.systemIcon="ic_menu_back"
                @tap=$navigateBack />
        </ActionBar>
        <StackLayout class="p-20">
            <Label text="Hasil Rekam Medis Pasien" class="h2 text-center" />
            <ScrollView height="700px">
                <StackLayout>
                    <ListView class="group" for="(h, index) in histories">
                        <v-template>
                            <Label textWrap="true" class="card">
                                <FormattedString>
                                    <Span text="Tanggal Konsultasi : " fontWeight="Bold"/>
                                    <Span :text="h.checkup_date"/>
                                    <Span text="\nKeluhan Pasien : " fontWeight="Bold"/>
                                    <Span :text="h.issue"/>
                                    <Span text="\nGejala Pasien : " fontWeight="Bold"/>
                                    <Span :text="h.symptomps"/>
                                    <Span text="\nHasil Diagnosa : " fontWeight="Bold"/>
                                    <Span :text="h.results"/>
                                    <Span text="\nAnjuran Dokter : " fontWeight="Bold"/>
                                    <Span :text="h.medicine"/>
                                 </FormattedString>
                            </Label>
                        </v-template>
                    </ListView>
                    <!-- <StackLayout>
                            <Label text="Hasil Diagnosa" />
                            <Label text="Hasil Diagnosa" />
                    </StackLayout> -->
                </StackLayout>
                        <!-- <FormattedString>
                                                <v-template>
                            <Span text="Tanggal Konsultasi : " />
                            <Span :text="h.checkup_date" @tap="(()=>{})" />
                            <Span text="Keluhan Pasien : " />
                            <Span :text="h.issue" @tap="(()=>{})" />
                                                    </v-template>
                        </FormattedString> -->


                    
                     <!-- <Span text="index"/>
                     <Span :text="index"/> -->

                <!-- <Label :text="h.checkup_date"/> -->

            <!-- <ListView for="h in histories">
                <Label>
                    <FormattedString class="text-center">
                        <Span text="Tanggal Konsultasi : " />
                        <Label :text="h.checkup_date" />
                    </FormattedString>
                </Label>
                    <Label text="Tanggal Konsultasi" />
                    <Label text="Hasil Diagnosa" />

                            <Label text="Keluhan Pasien" />
                            <Label text="Gejala Pasien" />
                            <Label text="Anjuran Dokter" />

            </ListView> -->
            </ScrollView>
        </StackLayout>
    </Page>
</template>

<script>
import { mapActions } from "vuex";
    export default {
        data() {
            return {
                histories : []
            };
        },
        async created(){
            const userId = this.$store.state.userLoggedIn.id
            this.histories = await this.getHistoryMedicalByUser(userId)
            console.log(this.histories)
        },
        methods : {
            ...mapActions({
                getHistoryMedicalByUser : "getHistoryMedicalByUser"
            })
        }
    };
</script>

<style>
.dokter {
  margin: 10;
  font-size: 24;
  color: green;
}
.group{
    margin: 10;
    height: 350;
}
.card{
    height: auto;
    margin: 10;
}
</style>