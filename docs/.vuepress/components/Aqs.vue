<template>

</template>

<script>

    export default {

        data() {
            return {
                code: '',
                state: ''
            }
        },

        mounted() {
            this.code = window.decodeURIComponent(window.location.search.substr(1).match(new RegExp("(^|&)code=([^&]*)(&|$)", "i"))?.[2]);
            this.state = window.decodeURIComponent(window.location.search.substr(1).match(new RegExp("(^|&)state=([^&]*)(&|$)", "i"))?.[2]);
            console.log('code ===', this.code)
            console.log('state ===', this.state)
        },

        methods: {},

    }

</script>

<style scoped>

</style>
