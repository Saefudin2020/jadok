<template>
    <Page>
        <ActionBar :title="dokter.name">
            <NavigationButton android.systemIcon="ic_menu_back"
                @tap=$navigateBack />
        </ActionBar>
        <StackLayout class="p-20">
            <Image src="~/image/doctor-list.jpg" width="100" height="20%" stretch="none" />
            <Label :text="dokter.name" class="h2 text-center" />
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
            <Label textWrap="true">
                <FormattedString>
                    <Span text="Pasien yang sudah antri :" />
                    <Span :text="dokter.pasien.length" />
                </FormattedString>
            </Label>
            <Button class="button1" text="Daftar" @tap="onButtonTap" row="0"
                col="0" />
        </StackLayout>
    </Page>
</template>

<script>
    export default {
        props: ["dokter"],
        data() {
            return {};
        },
        created(){
            console.log(this.dokter)
        }
    };
</script>

<style>
</style>