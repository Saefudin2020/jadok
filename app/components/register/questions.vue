<template>
    <FlexboxLayout class="modal" flexDirection="column"
        justifyContent="center" backgroundColor="white">
        <Label :text="question.text" class="h2 text-center" textWrap="true" />
        <Button @tap="close(true)">YES</Button>
        <Button @tap="close(false)">NO</Button>
    </FlexboxLayout>
</template>

<script>
    export default {
        props: ["question"],
        data() {
            return {};
        },
        methods: {
            close: function(isTrue) {
                let value = isTrue ? this.question.yesValue : 0
                this.$modal.close(value);
            },
        }
    };
</script>

<style>
</style>