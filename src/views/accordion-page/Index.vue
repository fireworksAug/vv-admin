<template>
    <div class="accord-container">
        <div class="content-box">
            <accordion :img-list="imgList"></accordion>
        </div>
    </div>
</template>

<script>
    import Accordion from "../../components/accordion/Accordion";
    export default {
        name: "Index",
        components: {Accordion},
        data() {
            return {
                imgList: [
                    require('../../assets/images/accordion/one.png'),
                    require('../../assets/images/accordion/two.png'),
                    require('../../assets/images/accordion/three.png'),
                    require('../../assets/images/accordion/four.png'),
                    require('../../assets/images/accordion/five.png'),
                    require('../../assets/images/accordion/six.png'),
                    require('../../assets/images/accordion/seven.png'),
                ],
            }
        }
    }
</script>

<style scoped lang="less">
    .accord-container{
        height: 100%;
        padding: 12px;
        position: relative;
        .content-box{
            width: 1000px;
            height: 200px;
            margin: 0 auto;
        }
    }
</style>