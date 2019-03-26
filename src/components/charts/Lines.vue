<template>
    <div ref="lineDom" class="charts chart-line"></div>
</template>

<script>
    import echarts from 'echarts';
    import iTheme from './theme';
    import {off, on} from "./resize";
    echarts.registerTheme('iTheme', iTheme);
    export default {
        name: "Lines",
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
                let series = this.value.map(item => {
                    const obj = {
                        name:item.name,
                        type:'line',
                        stack: '总量',
                        data:item.data
                    };
                    return obj;
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
                    grid: {
                        left: '12%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'],
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
                    series: series
                };
                this.chart = echarts.init(this.$refs.lineDom, 'iTheme');
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
