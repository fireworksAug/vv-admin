<template>
    <div ref="chartDom" class="charts chart-pie"></div>
</template>

<script>
    import echarts from 'echarts';
    import iTheme from './theme';
    import {off, on} from "./resize";
    echarts.registerTheme('iTheme', iTheme);
    export default {
        name: "pie",
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
                let option = {
                    title: {
                        text: this.title,
                        subtext: this.subText,
                        x: 'center'
                    },
                    tooltip: {
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: legend
                    },
                    series: [
                        {
                            name: this.title,
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: this.value,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                this.chart = echarts.init(this.$refs.chartDom, 'iTheme');
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
