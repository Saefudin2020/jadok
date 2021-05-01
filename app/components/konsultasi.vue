<template>
    <Page>
        <ActionBar title="Jadwal Dokter">
            <NavigationButton android.systemIcon="ic_menu_back"
                @tap="$navigateTo(home)" />
        </ActionBar>
        <StackLayout class="p-20">
            <Label text="Daftar Dokter Spesialist"
                class="h2 text-center" />

            <ListView for="(dokter, index) in dokters">
                <v-template>
                    <Label :text="dokter.name" class="dokter"
                        @tap="onItemTap(index)" />
                </v-template>
            </ListView>
        </StackLayout>



    </Page>
</template>

<script>
    import Dokter from "./dokter";

    import Vue from "nativescript-vue";
    import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
    Vue.use(RadSideDrawer);
    import home from "./HelloWorld";

    export default {
        data() {
            return {
                dokters: [{
                        id: 1,
                        name: "Dr. Alexander Cahya",
                        praktek: "Senin dan Kamis, Pukul 09.00 - 12.00",
                        maks: "Maksimal Pasien per hari : 3 Pasien",
                        pasien: [{
                            name: "Pasien 1",
                            umur: "40 Tahun",
                            kategori: "urgent"
                        }]
                    },
                    {
                        id: 2,
                        name: "Dr. Patrick Zorra",
                        praktek: "Senin dan Kamis, Pukul 09.00 - 12.00",
                        maks: "Maksimal Pasien per hari : 3 Pasien",
                        pasien: [{
                            name: "Pasien 1",
                            umur: "40 Tahun",
                            kategori: "urgent"
                        }]
                    },
                    {
                        id: 3,
                        name: "Dr. Vincent Erlangga",
                        praktek: "Senin dan Kamis, Pukul 09.00 - 12.00",
                        maks: "Maksimal Pasien per hari : 3 Pasien",
                        pasien: [{
                            name: "Pasien 1",
                            umur: "40 Tahun",
                            kategori: "urgent"
                        }]
                    }
                ],
                home: home
            };
        },
        methods: {
            onItemTap: function(index) {
                this.$navigateTo(Dokter, {
                    props: {
                        dokter: this.dokters[index]
                    }
                });
            }
        }
    };
</script>

<style scoped>
    .dokter {
        margin: 10;
        font-size: 24;
        color: green;
    }
</style>