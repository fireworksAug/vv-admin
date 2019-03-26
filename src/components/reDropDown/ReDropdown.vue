<template>
    <Dropdown @on-click="handleClick" placement="right-start">
        <DropdownItem name="parent">
            <span>
                <svg-icon v-if="!ifShow" :icon-class="parent.meta.icon" class-name="titleClass"></svg-icon>
                <span v-if="ifShow">{{generateTitle(parent.meta.title)}}</span>
                <Icon v-if="ifShow" type="ios-arrow-forward"></Icon>
            </span>
        </DropdownItem>
        <DropdownMenu slot="list">
            <template v-for="item in parent.children">
                <re-dropdown
                        v-if="item.children"
                        :key="item.name"
                        :if-show="true"
                        :parent="item">
                </re-dropdown>
                <DropdownItem v-else :key="item.name" :name="item.name">
                    <span>{{generateTitle(item.meta.title)}}</span>
                </DropdownItem>
            </template>
        </DropdownMenu>
    </Dropdown>
</template>

<script>
    import {generateTitle} from "../../until/i18n";

    export default {
        name: "ReDropdown",
        props: {
            parent: {
                type: Object,
                default: () => ({})
            },
            ifShow: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handleClick(name) {
                if (name === 'parent') {
                    return;
                }
                if (!this.ifShow) {
                    this.$router.push({name: name})
                }
            },
            generateTitle,
        }
    }
</script>

<style scoped lang="less">
    .titleClass {
        font-size: 20px;
    }
</style>
