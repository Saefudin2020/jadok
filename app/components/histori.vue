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
    export default {
        data() {
            return {};
        }
    };
</script>

<style>
</style>