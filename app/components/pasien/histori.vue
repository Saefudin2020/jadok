<template>
    <Page>
        <ActionBar title="Rekam Medis">
            <NavigationButton android.systemIcon="ic_menu_back"
                @tap=$navigateBack />
        </ActionBar>
        <StackLayout>
            <Label text="Hasil Rekam Medis Pasien" class="h2 text-center" />
                <Label text="Tanggal Konsultasi" />
                <Label text="Hasil Diagnosa" />
                    <ListView>
                        <Label text="Keluhan Pasien" />
                        <Label text="Gejala Pasien" />
                        <Label text="Anjuran Dokter" />
                    </ListView>
                <Label text="Resep Obat yang di anjurkan" />
        </StackLayout>
    </Page>
</template>

<script>
import { mapActions } from "vuex";
    export default {
        data() {
            return {
                history : [{
                    checkup_date : "",
                    issue : "",
                    symptomps : "",
                    medicine : "",
                    results : ""
                }]
            };
        },
        async created(){
            const userId = this.$store.state.userLoggedIn.id
            await this.getHistoryMedicalByUser(userId)
            await this.$store.state.history

            console.log("STORE", this.$store.state)
        },
        methods : {
            ...mapActions({
                getHistoryMedicalByUser : "getHistoryMedicalByUser"
            })
        }
    };
</script>

<style>
</style>