<template>
    <Page>
        <ActionBar :title="dokter.fullname">
            <NavigationButton android.systemIcon="ic_menu_back"
                @tap=$navigateBack />
        </ActionBar>
        <StackLayout class="p-20">
            <Image src="~/image/doctor-list.jpg" width="100" height="20%" stretch="none" />
            <Label :text="dokter.fullname" class="h2 text-center" />
            <Label textWrap="true">
            <FormattedString class="text-center">
                <Label :text="dokter.description"/>
            </FormattedString>
             </Label>
            <Label textWrap="true">
            <FormattedString>
                    <Span text="Maksimal Pasien per hari : " />
                    <Span :text="dokter.max_patient" />
                    <Span text=" pasien" />
            </FormattedString>
             </Label>
            <!-- <Label textWrap="true">
                <FormattedString>
                    <Span text="Pasien yang sudah antri :" />
                    <Span :text="dokter.pasien.length" />
                </FormattedString>
            </Label> -->
            <Button class="button1" text="Daftar" @tap="register" row="0"
                col="0" />
        </StackLayout>
    </Page>
</template>

<script>
    import { mapActions } from "vuex";
    export default {
        props: ["dokter"],
        data() {
            return {
                doctor_id : "",
                user_id : ""
            };
        },
        async created(){
            const x = await this.dokter
            console.log("X", x)
        },
        methods : {
            register(){
                this.registerPatientIntoDoctor({
                    doctor_id : this.dokter.id, 
                    user_id : this.$store.state.userLoggedIn.id}).then(()=>{
                        alert("Berhasil terdaftar")
                    })
            },
            ...mapActions({
                getDataDoctorsByCategory : "getDataDoctorsByCategory",
                registerPatientIntoDoctor : "registerPatientIntoDoctor"
            })
        }
    };
</script>

<style>
</style>