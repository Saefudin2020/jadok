<template>
    <Page>
        <ActionBar title="">
            <NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="goBack" />
        </ActionBar>
        <ScrollView>
            <StackLayout class="home-panel">
                <Image src="~/images/logo.png" height="500px" width="500px"/>
                <Label text="REGISTER" class="h2 text-center" />
                <TextField v-model="email" hint="Ketik email anda" />
                <TextField v-model="password" hint="Password" secure="true" />
                <TextField v-model="nama" hint="Nama sesuai KTP" />
                <TextField v-model="alamat" hint="Alamat sesuai KTP" />
                <Label text="Tanggal Lahir anda" class="h3 text-center" />
                <DatePicker v-model="selectedDate" minDate="1970-01-01"
                    maxDate="2100-12-31" />
                <Button text="Submit" @tap="onButtonTap" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    // import test from "./test";'
    import LoginPasien from "../login/login_pas.vue"
    import { mapActions } from "vuex";
    import birthdate from '../../lib/birthCalc'
    import Vue from "nativescript-vue";
    import RadDataForm from "nativescript-ui-dataform/vue";
    import question from './questions.vue';

    Vue.use(RadDataForm);

    export default {
        data() {
            return {
                nama: "",
                alamat: "",
                email : "",
                password : "",
                selectedDate : undefined,
                totalYesValue : 0,
                category : '',
                questions : [{
                    text : "Apakah Anda Mengalami Batuk Hingga Berbulan-bulan? ",
                    yesValue : 5,
                    noValue : 0
                }, {
                    text : "Apakah Anda Mengalami Batuk Berdahak Berwarna Kecoklatan? ",
                    yesValue : 5,
                    noValue : 0 
                },
                {
                    text : "Apakah Anda Mengalami Sesak Saat Bernafas? ",
                    yesValue : 8,
                    noValue : 0 
                },
                {
                    text : "Apakah Anda Saat Batuk hingga Mengeluarkan Darah? ",
                    yesValue : 9,
                    noValue : 0 
                },
                {
                    text : "Apakah Anda Perokok Berat?  ",
                    yesValue : 2,
                    noValue : 0 
                }]
                
            };
        },
        methods: {
            async onButtonTap(){
                let age = birthdate(this.selectedDate)
                await this.questions.map((n, i)=>{
                    this.$showModal(question, { props: { question: n }}).then((data)=>{
                        this.totalYesValue += data 
                        if (i <= 0){
                            this.registerService({
                                birthdate : this.selectedDate,
                                email : this.email, 
                                name : this.nama, 
                                password : this.password, 
                                with_category_user : getCategory(this.totalYesValue),
                                address : this.alamat,
                                age,
                            }).then(()=>{
                                alert("Berhasil registrasi!")
                                return this.$navigateTo(LoginPasien)
                            })
                        }
                    })
                })

                const getCategory = (value) => {
                    if (value > 17){
                        return 'urgent'
                    } 
                    return 'normal'
                }
            },
            ...mapActions({
                registerService : "registerPatient"
            })
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