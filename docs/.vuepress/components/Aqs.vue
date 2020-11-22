<template>

</template>

<script>

    export default {

        data() {
            return {
                code: ''
            }

        },

        mounted() {
            this.code = this.obtainQueryVariable('code');
            alert(this.code);
        },

        methods: {

            obtainQueryVariable(name) {
                return window.decodeURI(window.location.search.substr(1).match(new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"))?.[2]);
            },

        },

    }

</script>

<style scoped>

</style>
