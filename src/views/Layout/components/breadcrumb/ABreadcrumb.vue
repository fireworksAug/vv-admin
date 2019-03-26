<template>
    <div class="bread-box">
        <div class="menu">
            <Icon  :class="triggerClass" size="25" type="md-menu" @click.native="changeTrigger"/>
        </div>
        <div class="bread">
            <Breadcrumb>
                <BreadcrumbItem v-for="(item,index) in breadList" :key="index">
                    <span v-if="index === breadList.length - 1">
                        <svg-icon :icon-class="item.meta.icon" class-name="iconClass"></svg-icon>
                        {{generateTitle(item.meta.title)}}
                    </span>
                    <span v-else-if="index === breadList.length - 2">
                        <svg-icon :icon-class="item.meta.icon" class-name="iconClass"></svg-icon>
                        {{generateTitle(item.meta.title)}}
                    </span>
                    <router-link v-else :to="item.path">
                        <svg-icon :icon-class="item.meta.icon" class-name="iconClass"></svg-icon>
                        {{generateTitle(item.meta.title)}}
                    </router-link>
                </BreadcrumbItem>
            </Breadcrumb>
        </div>
    </div>

</template>

<script>
    import {generateTitle} from "../../../../until/i18n";

    export default {
        name: "ABreadcrumb",
        props: {
            collapsed: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                breadList: []
            }
        },
        computed: {
            triggerClass() {
                return [
                    'trigger',
                    this.collapsed ? 'rotate': ''
                ]
            }
        },
        watch: {
            $route(val) {
                this.getBreadcrumb();
            }
        },
        mounted() {
            this.getBreadcrumb();
        },
        methods: {
            changeTrigger() {
                this.$emit('update:collapsed', !this.collapsed);
            },
            getBreadcrumb() {
                let matched =this.$route.matched.filter(item => item.meta.title);
                const first = matched[0];
                if (first && first.name !== this.$config.homePage) {
                    let dashboard = [{path: '/',name:'home',meta: {title: 'home',icon: 'home'}}];
                    matched = dashboard.concat(matched);
                }
                this.breadList =matched.filter(item => item.meta.title);
            },
            generateTitle,
        }
    }
</script>

<style scoped lang="less">
    .bread-box{
        position: relative;
        height: 40px;
        padding: 5px;
        .menu{
            position: absolute;
            width: 40px;
            height: 100%;
            top: 0;
            left: 0;
            padding: 7px 7px;
            .trigger{
                cursor: pointer;
                transition: transform .1s ease;
                &.rotate{
                    transform: rotateZ(-90deg);
                    transition: transform .1s ease;
                }
            }
        }
        .bread{
            position: absolute;
            top: 0;
            line-height: 40px;
            left: 46px;
            width: calc(100% - 40px);
            height: 100%;
        }
        .iconClass {
            font-size: 16px;
            margin-right: 0;
        }
    }

</style>
