<template>
    <div ref="barDom" class="charts chart-bar"></div>
</template>

<script>
    import echarts from 'echarts';
    import iTheme from './theme';
    import {off, on} from "./resize";
    echarts.registerTheme('iTheme', iTheme);
    export default {
        name: "bar",
        props: {
            /**
             * @description 数据值
             */
            value: {
                type: Array,
                default: () => []
            },
            /**
             * @description 标题
             */
            title: {
                type: String,
                default: ''
            },
            /**
             * @description 副标题
             */
            subText: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                chart: null
            }
        },
        mounted() {
            this.$nextTick(() => {
               this.initChart();
            });
        },
        methods: {
            initChart() {
                let legend = this.value.map(item => item.name);
                let series = [];
                series = this.value.map(item => {
                    const obj = {
                        name: item.name,
                        data: item.data,
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                    };
                    return obj
                });
                let option = {
                    title: {
                        text: this.title,
                        subtext: this.subText,
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data :  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: legend
                    },
                    grid: {
                        left: '12%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    series: series
                };
                this.chart = echarts.init(this.$refs.barDom, 'iTheme');
                this.chart.setOption(option);
                on(window, 'resize', this.resize)
            },
            resize () {
                this.chart.resize()
            }
        },
        beforeDestroy() {
            off(window, 'resize', this.resize)
        }
    }
</script>

<style scoped>

</style>
