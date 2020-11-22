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
            this.code = window.decodeURI(window.location.search.substr(1).match(new RegExp("(^|&)code=([^&]*)(&|$)", "i"))?.[2]);
            console.log('code ===', this.code)
        },

        methods: {},

    }

</script>

<style scoped>

</style>
