<template>
    <Content :style="{minHeight: '280px',height: '300px'}" class="container">
        <keep-alive v-if="keepAlive">
            <router-view/>
        </keep-alive>
        <router-view v-else />
    </Content>
</template>

<script>
    export default {
        name: "AContent",
        computed: {
            keepAlive() {
                return this.$route.meta.keepAlive;
            }
        }
    }
</script>

<style scoped lang="less">
    .container{
        overflow-y: auto;
    }
</style>
