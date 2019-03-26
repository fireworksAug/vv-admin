<template>
    <Card :bordered="bordered"
          :dis-hover="disHover"
          :shadow="shadow"
          :padding="padding" class="card-wrapper">
        <div class="content-box">
            <div class="card-left" :style="{'backgroundColor': backgroundColor}">
                <svg-icon :icon-class="iconName" :class-name="iconClass"></svg-icon>
            </div>
            <div class="card-right">
                <div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </Card>
</template>

<script>
    export default {
        name: "CardInfo",
        props: {
            /**
             * @description icon 背景色
             */
            backgroundColor: {
                type: String,
                default: ''
            },
            /**
             * @description icon name
             */
            iconName: {
                type: String,
                default: ''
            },
            /**
             * @description icon class样式名
             */
            iconClass: {
                type: String,
                default: ''
            },
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
            }
        }
    }
</script>

<style lang="less">
    .size {
        width: 100%;
        height: 100%;
    }
    .common{
        float: left;
        display: table;
        text-align: center;
        height: 100%;
    }
    .middle-center{
        display: table-cell;
        vertical-align: middle;
    }
    .card-wrapper{
        .size;
        .ivu-card-body{
            .size;
        }
        overflow: hidden;
        .content-box{
            .size;
            .card-left{
                .common;
                width: 36%;
                line-height: 120px;
            }
            .card-right {
                .common;
                width: 64%;
                & > div {
                    .middle-center;
                }
            }
        }
    }
</style>
