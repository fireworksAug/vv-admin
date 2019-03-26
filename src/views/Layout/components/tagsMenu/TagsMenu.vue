<template>
    <div class="tags-container">
        <div class="left-icon">
            <Icon type="ios-arrow-back" :size="25" @click.native="handleScroll(240)"/>
        </div>
        <div class="right-icon">
            <Icon type="ios-arrow-forward" :size="25" @click.native="handleScroll(-240)"/>
        </div>
        <div class="del-icon">
            <Dropdown @on-click="handleClick">
                <Icon type="md-close" :size="25" />
                <DropdownMenu slot="list">
                    <DropdownItem name="other">关闭其他</DropdownItem>
                    <DropdownItem name="all">关闭所有</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
        <div class="center-tags" ref="outerBox">
            <div ref="bodyBox" class="scroll-body" :style="{left: scrollLeft+'px'}">
                <Tag v-for="(item,index) in tagsNavList"
                     type="dot"
                     class="my-tag"
                     :name="item.name"
                     @on-close="handleClose"
                     @click.native="tagsClick(item)"
                     :closable="item.name !== homepage"
                     :color="item.name === $route.name? 'primary': ''"
                     :key="index">
                    {{generateTitle(item.meta.title)}}
                </Tag>
            </div>
        </div>
    </div>
</template>

<script>
    import {generateTitle} from "../../../../until/i18n";

    export default {
        name: "TagsMenu",
        props: {
            tagsNavList: {
                type: Array,
                default: () => []
            }
        },
        data() {
          return {
              scrollLeft: 0,
          }
        },
        computed: {
            homepage() {
                return this.$config.homePage;
            }
        },
        methods: {
            handleScroll(offset) {
                const outWidth = this.$refs.outerBox.offsetWidth;
                const bodyWidth = this.$refs.bodyBox.offsetWidth;
                if (offset > 0) {
                    this.scrollLeft = Math.min(0, this.scrollLeft + offset)
                } else {
                    if (outWidth < bodyWidth) {
                        this.scrollLeft = Math.max(this.scrollLeft + offset, outWidth - bodyWidth)
                    } else {
                        this.scrollLeft = 0
                    }
                }
            },
            // 关闭标签页
            handleClose(e,name) {
                this.$emit('close-tag', name);
            },
            // 跳转
            tagsClick(val) {
                this.$emit('tag-click',val);
            },
            generateTitle,
            /**
             *  关闭tag标签
             * @param name
             */
            handleClick(name) {
                this.$emit('close-icon', name);
            }
        }
    }
</script>

<style scoped lang="less">
    .tags-container {
        height: 38px;
        padding: 0 3px;
        position: relative;
        user-select: none;
        .left-icon,.right-icon,.center-tags,.del-icon{
            position: absolute;
            top: 0;
            line-height: 37px;
        }
        .center-tags{
            left: 25px;
            right: 50px;
            height: 100%;
            overflow: hidden;
            background-color: rgb(240,240,240);
            box-shadow: inset 0 0 3px 2px hsla(0,0%,39.2%,.1);
            .scroll-body{
                position: absolute;
                white-space:nowrap;
                padding: 0 6px;
                transition: left .3s ease;
                top: 0;
                overflow: visible;
                bottom: 0;
                height: 100%;
            }
        }
        .del-icon{
            right: 0;
            width: 25px;
            cursor: pointer;
            z-index: 10;
        }
        .left-icon{
            left: 0;
            width: 25px;
            cursor: pointer;
            z-index: 10;
            &:hover{
                background-color: #f5f5f5;
            }
        }
        .right-icon{
            right: 25px;
            width: 25px;
            cursor: pointer;
            z-index: 10;
            &:hover{
                background-color: #f5f5f5;
            }
        }
    }
</style>
