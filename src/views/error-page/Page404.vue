<template>
    <div class="four-container">
        <div>
            <svg-icon icon-class="404" class-name="iconClass"></svg-icon>
            <div>
                <Button type="error" shape="circle" @click="goHome" long>返回首页</Button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page404",
        methods: {
            goHome() {
                this.$router.push({path: '/'})
            }
        }
    }
</script>

<style scoped lang="less">
    .four-container{
        height: 100%;
        width: 100%;
        padding: 25px;
        display: flex;
        justify-content:center;
        .iconClass{
            display: block;
            font-size: 400px;
        }
    }
</style>