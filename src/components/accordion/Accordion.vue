<template>
    <div class="accordion">
        <ul>
            <li v-for="(item,index) in imgList" :key="index">
                <img :src="item"/>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Accordion",
        props: {
            imgList: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
            }
        }
    }
</script>

<style scoped lang="less">
    .size{
        width: 1000px;
        height: 200px;
    }
    .accordion{
        .size;
        ul {
           .size;
            overflow: hidden;
        }
        li {
            width: 14.28%;
            height: 100%;
            float: left;
            list-style: none;
            transition: width 1s ease;
        }
        ul:hover li{
            width: 5%;
        }
        ul li:hover {
            width: 70%;
        }
        img {
            height:100%;
            width: 700px;
            cursor: pointer;
        }
    }
</style>