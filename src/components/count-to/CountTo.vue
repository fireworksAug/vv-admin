<template>
    <div class="count-wrapper">
        <slot name="left"></slot>
        <span :id="countId" :class="countClass"></span>
        <slot name="right"></slot>
    </div>
</template>

<script>
    import {CountUp} from 'countup.js'

    export default {
        name: "CountTo",
        props: {
            /**
             * @description 起始值
             */
            startVal: {
                type: Number,
                default: 0
            },
            /**
             * @description 结束值
             */
            endVal: {
                type: Number,
                require: true
            },
            /**
             * @description 小数点后保留的位数
             */
            decimalPlaces: {
                type: Number,
                default: 0
            },
            /**
             * @description 小数点符号
             */
            decimal: {
                type: String,
                default: '.'
            },
            /**
             * @description 数字渐变持续时长
             */
            duration: {
                type: Number,
                default: 5
            },
            /**
             * @description 是否启用分组
             */
            useGrouping: {
                type: Boolean,
                default: true
            },
            /**
             * @description 分组符号
             */
            separator: {
                type: String,
                default: ','
            },
            /**
             * @description 是否启用缓动动画
             */
            useEasing: {
                type: Boolean,
                default: true
            },
            /**
             * @description 样式
             */
            countClass: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                countTo: null
            }
        },
        computed: {
            countId() {
                return `count_${this._uid}`;
            }
        },
        watch: {
            endVal(val) {
                this.countTo.update(val)
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.countTo = new CountUp(this.countId, this.endVal, {
                    startVal: this.startVal,
                    decimalPlaces: this.decimalPlaces,
                    duration: this.duration,
                    useGrouping: this.useGrouping,
                    useEasing: this.useEasing,
                    separator: this.separator,
                    decimal: this.decimal,
                });
                if(!this.countTo.error) {
                    this.countTo.start();
                } else {
                    console.log(this.countTo.error)
                }
            });
        }
    }
</script>

<style scoped>

</style>
