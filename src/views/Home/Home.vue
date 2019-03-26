<template>
    <div class="main-container">
        <Row :gutter="16">
            <Col :xs="12" :md="8" :lg="4" v-for="(item,index) in cardList" :key="`card_${index}`" style="height: 120px;">
                <card-info :background-color="item.backgroundColor" :icon-name="item.icon" icon-class="iconClass">
                    <count-to :end-val="item.num" count-class="countClass" :duration="item.duration"></count-to>
                    <p>{{item.title}}</p>
                </card-info>
            </Col>
        </Row>
        <Row :gutter="16" style="margin-top: 10px;">
            <Col  :xs="24" :md="8" :lg="8">
                <Card shadow>
                    <chart-pie title="今日统计量" :value="pieData" style="height: 300px"></chart-pie>
                </Card>
            </Col>
            <Col  :xs="24" :md="16" :lg="16">
                <Card shadow>
                    <chart-bar title="本周办卡统计情况" :value="barData" style="height: 300px"></chart-bar>
                </Card>
            </Col>
        </Row>
        <Row :gutter="16" style="margin-top: 10px">
            <Col  :xs="24" :md="16" :lg="16">
                <Card shadow>
                    <chart-lines title="近三年房价走势" :value="lineData" style="height: 300px"></chart-lines>
                </Card>
            </Col>
            <Col  :xs="24" :md="8" :lg="8">
               <card-rank title="全国污染指数排名"></card-rank>
            </Col>
        </Row>
    </div>
</template>

<script>
    import CardInfo from "../../components/card-info/CardInfo";
    import CountTo from "../../components/count-to/CountTo";
    import {ChartPie,ChartBar,ChartLines} from '../../components/charts/index';
    import CardRank from "../../components/card-rank/CardRank";
    export default {
        name: "Home",
        components: {CardRank, CountTo, CardInfo,ChartPie,ChartBar,ChartLines},
        data() {
            return {
                // 卡片数据
                cardList: [
                    {title: '用户注册数', num: 123, backgroundColor: '#0091ff', duration: 1, icon: 'user'},
                    {title: '点赞数', num: 155, backgroundColor: '#1fac65', duration: 2, icon: 'like'},
                    {title: '访客游览记录', num: 122, backgroundColor: '#ff9900', duration: 3, icon: 'visitor'},
                    {title: '下载数', num: 166, backgroundColor: '#ed3f14', duration: 4, icon: 'down'},
                    {title: '今日上报异常', num: 177, backgroundColor: '#eb2f96', duration: 5, icon: 'error'},
                    {title: '累计上报', num: 188, backgroundColor: '#a709ed', duration: 6, icon: 'count'},
                ],
                // pie 数据
                pieData: [
                    {name: 'QQ', value: 130}, {name: '微信', value: 170}, {name: '钉钉', value: 200}, {name: '飞Q', value: 100}
                ],
                barData: [
                    {name: '周卡', data: [100,90,80,120,50,200,100]},
                    {name: '月卡', data: [120,60,100,120,50,200,100]},
                    {name: '年卡', data: [140,90,80,110,150,220,130]},
                    {name: '季度卡', data: [110,130,120,122,135,230,180]},
                ],
                lineData: [
                    {name: '2017', data: [10000,10500,11000,11000,10500,10000,10500,11000,11000,10500,9999,9999]},
                    {name: '2018', data: [12000,12500,12000,12000,12500,12000,12500,12000,12000,12500,10009,10009]},
                    {name: '2019', data: [10000,10500,11000,11000,10500,10000,10500,11000,11000,10500,9999,9999]},
                ]
            }
        }
    }
</script>

<style lang="less">
    .main-container {
        height: 100%;
        position: relative;
        padding: 12px;
        .ivu-col {
            padding-bottom: 10px;
            .iconClass {
                color: #fff;
                font-size: 32px;
                margin-right: 0;
            }

            .countClass {
                font-size: 50px;
            }
        }
    }
</style>
