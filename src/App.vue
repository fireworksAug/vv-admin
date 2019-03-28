<template>
    <div id="app">
            <router-view/>
    </div>
</template>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
        ::-webkit-scrollbar-track-piece { //滚动条凹槽的颜色，还可以设置边框属性
            background-color:#f8f8f8;
        }
        ::-webkit-scrollbar {//滚动条的宽度
            width:2px;

        }
        ::-webkit-scrollbar-thumb {//滚动条的设置
            background-color: #c5c5c5;
            background-clip:padding-box;
            min-height:28px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background-color: #a8a8a8;
        }
    }
</style>
