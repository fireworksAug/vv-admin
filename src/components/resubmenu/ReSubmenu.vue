<template>
    <Submenu :name="parent.name">
        <template slot="title">
            <svg-icon :icon-class="parent.meta.icon" class-name="iconClass"></svg-icon>
            <span>{{generateTitle(parent.meta.title)}}</span>
        </template>
        <template v-for="item in parent.children">
            <re-submenu
                    v-if="item.children"
                    :key="item.name"
                    :parent="item">
            </re-submenu>
            <menu-item v-else :key="item.name" :name="item.name">
                <svg-icon :icon-class="item.meta.icon" class-name="iconClass"></svg-icon>
                <span>{{generateTitle(item.meta.title)}}</span>
            </menu-item>

        </template>
    </Submenu>
</template>

<script>
    import {generateTitle} from "../../until/i18n";

    export default {
        name: "ReSubmenu",
        props: {
            parent: {
                type: Object,
                default: () => ({})
            }
        },
        methods: {
            changeRouter(parent,child) {
                this.$router.push({path: parent+'/'+child})
            },
            generateTitle,
        }
    }
</script>

<style scoped>
.iconClass{
    margin-right: 8px;
    font-size: 16px;
}
</style>
