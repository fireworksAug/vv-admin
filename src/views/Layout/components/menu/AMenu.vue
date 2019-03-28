<template>
    <div class="menu-container">
        <Menu v-show="!isCollapsed"
              @on-select="handleSelect"
              ref="menu"
              :active-name="$route.name"
              :theme="getThemes" width="auto"
              :accordion="true"
              :open-names="[$route.matched[0].name]"
              :class="menuitemClasses">
            <template v-for="item in routerList">
                <MenuItem v-if="item.children && item.hidden && hasOneChild(item)"
                          :key="item.children[0].name"
                          :name="item.children[0].name">
                    <svg-icon :icon-class="item.children[0].meta.icon" class-name="iconClass"></svg-icon>
                    <span>{{generateTitle(item.children[0].meta.title)}}</span>
                </MenuItem>
                <re-submenu v-if="!item.hidden"
                            :key="item.name"
                            :parent="item">
                </re-submenu>
            </template>
        </Menu>
        <div v-show="isCollapsed">
            <template v-for="item in routerList">
                <Tooltip transfer v-if="item.children && item.hidden && hasOneChild(item)"
                         :content="item.children[0].meta.title"
                         :key="item.children[0].name"
                         placement="right"
                         @click.native="handleSelect(item.children[0].name)">
                <span class="drop-menu-a">
                   <svg-icon :icon-class="item.children[0].meta.icon" class-name="iconClassToop"></svg-icon>
                </span>
                </Tooltip>
                <re-dropdown v-if="!item.hidden"
                             :if-show="false"
                             :key="item.name"
                             :parent="item"></re-dropdown>
            </template>
        </div>
    </div>
</template>

<script>
    import ReSubmenu from "../../../../components/resubmenu/ReSubmenu";
    import ReDropdown from "../../../../components/reDropDown/ReDropdown";
    import {generateTitle} from "../../../../until/i18n";

    export default {
        name: "AMenu",
        components: {ReDropdown, ReSubmenu},
        props: {
            isCollapsed: {
                type: Boolean,
                default: false
            },
            routerList: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {}
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
            getThemes() {
                return this.$store.state.theme;
            }
        },
        methods: {
            // 路由跳转
            handleSelect(name) {
                this.$router.push({name:name,})
            },
            // 判断是否是layout下 只有一级目录
            hasOneChild(item) {
                return item.children.length === 1;
            },
            generateTitle,
        },
        watch: {
            '$route'(newRoute) {
                this.$nextTick(() => {
                    this.$refs.menu.updateOpened()
                });
            }
        },
    }
</script>

<style scoped lang="less">
    .menu-container{
        user-select: none;
        .ivu-tooltip, .drop-menu-a, .ivu-dropdown {
            display: block;
            text-align: center;
            padding: 5px 0;
        }
        .ivu-tooltip {
            cursor: pointer;
            width: 100%;
        }
        .ivu-tooltip :hover {
            background-color: #f3f3f3;
        }
        .iconClass{
            margin-right: 8px;
            font-size: 16px;
        }
        .iconClassToop{
            font-size: 20px;
        }
    }
</style>
