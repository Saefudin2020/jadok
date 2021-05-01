<template>
    <Page class="bg-green-600">
        <ActionBar class="text-white bg-blue-900" title="Hai dokter " />
        <GridLayout columns="*" rows="*" horizontalAlignment="center">
            <Image class="custom" src=" ~/image/logo.png " loadMode=" async "
                stretch="none"/>
            <StackLayout class="form">
                <StackLayout class="input-field">
                    <TextField v-model="email" class="input" hint="Email"
                        keyboardType="email" autocorrect="false"
                        autocapitalizationType="none">
                    </TextField>
                </StackLayout>

                <StackLayout class="input-field">
                    <TextField v-model="password" class="input"
                        hint="Password123" keyboardType="password"
                        autocorrect="false" autocapitalizationType="none">
                    </TextField>
                </StackLayout>

                <Button @tap="isLogged" text="Log In" class="btn btn-primary">
                </Button>

            </StackLayout>

            <FlexboxLayout class="page">
                <StackLayout class="form">
                </StackLayout>

                <Label text="Don’t have an account?"></Label>
            </FlexboxLayout>
        </GridLayout>
    </Page>
</template>

<script>
    import homepage2 from "./homepage2";
    export default {
        data() {
            return {
                homepage2: homepage2,
                email: "",
                password: ""
            };
        },
        methods: {
            isLogged: function() {
                const validEmail = "a";
                const password = "a";
                if (validEmail == this.email && password == this
                    .password) {
                    return this.$navigateTo(this.homepage2);
                }
                alert("Gagal login");
            }
        }
    };
</script>

<style scoped>
    .page {
        align-items: center;
        flex-direction: column;
    }

    .custom {
        width: 1000;
        height: 1000;
        align-items: center;

    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }
</style>