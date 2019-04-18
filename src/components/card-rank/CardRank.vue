<template>
    <Card :bordered="bordered"
          :dis-hover="disHover"
          :shadow="shadow"
          :padding="padding" class="card-wrapper">
        <p slot="title">
            {{title}}
        </p>
        <a slot="extra">
            <Icon type="md-arrow-up" />
        </a>
        <ul class="ul-class ul-title">
            <li>
                <span style="height: 20px;width: 30px"></span>
                <span style="width: 35%;">城市</span>
                <span style="width: 30%;">污染指数</span>
                <span style="width: calc(30% - 30px);">级别</span>
            </li>
        </ul>
        <ul class="ul-content">
            <li v-for="(item,index) in list" :key="index">
                <span class="rate">
                    <Tag :color="index > 2 ? 'default':(index > 1 ? 'orange':(index > 0 ? 'volcano': 'red'))">{{index + 1}}</Tag>
                </span>
                <span style="width: 35%;">{{item.city}}</span>
                <span style="width: 30%;">{{item.exponent}}</span>
                <span style="width: calc(30% - 30px);">
                    <Tag style="width: 40px" :color="item.exponent<51?'green':(item.exponent<101?'blue':(item.exponent<201?'orange':'red'))">
                        {{item.level}}
                    </Tag>
                </span>
            </li>
        </ul>
    </Card>
</template>

<script>
    export default {
        name: "CardRank",
        props: {
            /**
             * @description 是否显示边框
             */
            bordered: {
                type: Boolean,
                default: false
            },
            /**
             * @description 禁用鼠标悬停显示阴影
             */
            disHover: {
                type: Boolean,
                default: false
            },
            /**
             * @description 是否显示阴影
             */
            shadow: {
                type: Boolean,
                default: true
            },
            /**
             * @description 卡片内部边距 px
             */
            padding: {
                type: Number,
                default: 0
            },
            /**
             * @description 卡片标题
             */
            title: {
                type: String,
                default: ''
            }
        },
        computed: {
            setBackground(index) {
                return {
                    backgroundColor: 'red'
                }
            }
        },
        data() {
            return {
                list: [
                    {
                        city: '北京',
                        exponent: '280',
                        level: '中',
                    },
                    {
                        city: '上海',
                        exponent: '170',
                        level: '轻'
                    },
                    {
                        city: '深圳',
                        exponent: '160',
                        level: '轻'
                    },
                    {
                        city: '济南',
                        exponent: '60',
                        level: '良'
                    },
                    {
                        city: '杭州',
                        exponent: '50',
                        level: '优'
                    },
                    {
                        city: '广州',
                        exponent: '50',
                        level: '优'
                    },
                    {
                        city: '香港',
                        exponent: '40',
                        level: '优'
                    },
                    {
                        city: '澳门',
                        exponent: '30',
                        level: '优'
                    },
                    {
                        city: '台湾',
                        exponent: '30',
                        level: '优'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .card-wrapper {
        .ul-class{
            color: gray;
            font-weight: bold;
            padding: 3px 16px 3px 16px;
            &  span {
                display: inline-block;
                text-align: center;
                vertical-align: middle;
                height: 100%;
                overflow: hidden;
            }
        }
        .ul-title{
            li:first-child{
                color:black;
            }
        }
        .ul-content{
            padding: 0 16px 16px;
            &  span {
                display: inline-block;
                text-align: center;
                vertical-align: middle;
                height: 100%;
                overflow: hidden;
                line-height: 25px;
            }
            li:hover{
                background-color: #f5f5f5;
            }
            li:nth-child(even){
                background-color: #f5f5f5;
            }
            .rate{
                width: 30px;
                color: white;
            }
        }
        & li {
            height: 25px;
            list-style: none;
        }

    }
</style>
