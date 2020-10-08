<template>

    <div>

        <h1><span>{{str}}</span></h1>

    </div>

</template>

<script>

    export default {

        data() {

            return {

                millisecond: 0,

                second: 0,

                minute: 0,

                hour: 0,

                day: 0,

                time: '',

                str: ''

            }

        },

        mounted() {

            const old_date = new Date('2019/10/02 00:00:00').getTime()
            const new_date = new Date().getTime();
            const diff_time = (new_date - old_date) / 1000;
            this.day = parseInt(diff_time / 86400 + '');
            this.hour = parseInt(diff_time / 3600 + '') - 24 * this.day;
            this.minute = parseInt(diff_time % 3600 / 60 + '');
            this.second = parseInt(diff_time % 60 + '');
            this.timeStart()

        },

        methods: {

            timeStart() {

                this.time = window.setInterval(this.timer, 50)

            },

            timer() {

                this.millisecond = this.millisecond + 50

                if (this.millisecond >= 1000) {

                    this.millisecond = 0

                    this.second += 1

                }

                if (this.second >= 60) {

                    this.second = 0

                    this.minute += 1

                }

                if (this.minute >= 60) {

                    this.minute = 0

                    this.hour += 1

                }

                if (this.hour >= 24) {

                    this.hour = 0

                    this.day += 1

                }

                this.str = this.format0(this.day) + "天" + this.format0(this.hour) + "时" + this.format0(this.minute) + "分" + this.format0(this.second) + "秒";

            },

            format0(t) {
                return t < 10 ? '0' + t : '' + t
            }

        },

        destroy() {

            window.clearInterval(this.time)

        }

    }

</script>

<style scoped>

</style>
