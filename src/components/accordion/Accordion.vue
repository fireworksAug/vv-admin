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
    .accordion{
        ul {
            width: 100%;
            height: 100%;
        }
        li {
            width: 14%;
            float: left;
            overflow: hidden;
            list-style: none;
            transition: all 1.5s ease;
            cursor: pointer;
        }
        ul:hover li{
            width: 5%;
        }
        ul li:hover {
            width: 50%;
        }
        img {
            height: 200px;
            width: 600px;
        }
    }
</style>