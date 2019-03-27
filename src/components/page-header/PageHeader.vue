<template>
    <Header class="header-box">
        <h2>{{generateTitle(getTitle)}}</h2>
        <p>{{describe}}</p>
    </Header>
</template>

<script>
    import {generateTitle} from "../../until/i18n";

    export default {
        name: "PageHeader",
        props: {
            title: {
                type: String,
                default: ''
            },
            describe: {
                type: String,
                default: '这里是这个页面的描述'
            }
        },
        computed: {
            getTitle() {
                return this.title || this.$route.meta.title ;
            }
        },
        methods:{
            generateTitle,
        }
    }
</script>

<style scoped lang="less">
    .header-box {
        background-color: #fff;
        padding: 0 25px;
        h2 {
            height: 36px;
            line-height: 36px;
        }
        p{
            height: 24px;
            line-height: 24px;
        }
    }
</style>
