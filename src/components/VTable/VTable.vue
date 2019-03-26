<template>
    <div class="v-table-class">
        <Alert show-icon
        v-if="showAlter">
            当前已选择 <span style="color: dodgerblue;font-weight: bold;font-size: 16px">{{checkLen}}</span> 项
        </Alert>
        <Table :border="border"
               ref="selection"
               :columns="columns"
               :data="data"
               height="500"
               @on-change="pageChange"
               @on-selection-change="selectChange"></Table>
        <Page :total="100" class-name="page-class" show-sizer show-elevator show-total />
    </div>
</template>

<script>
    export default {
        name: "VTable",
        props: {
            /**
             * @description 是否显示 Alter 提示
             */
            showAlter: {
                type: Boolean,
                default: true
            },
            /**
             * @description 表格边框
             */
            border: {
                type: Boolean,
                default: true
            },
            /**
             * @description 表格列
             */
            columns: {
                type: Array,
                default: () => []
            },
            /**
             * @description 表格数据项
             */
            data: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                selectData: [],
            }
        },
        computed: {
            checkLen() {
                return this.selectData.length;
            }
        },
        methods: {
            /**
             * @description 表格数据选中触发 返回选中的项
             * @param selects
             */
            selectChange(selects) {
                this.selectData = selects;
                this.$emit('select-data', this.selectData);
            },
            /**
             * @description 页码改变触发 返回改变后的页码
             * @param page
             */
            pageChange(page) {
                this.$emit('page-change', page);
            }
        }
    }
</script>

<style scoped lang="less">
    .v-table-class{
        position: relative;
        padding: 12px;
        .ivu-alert{
            font-size: 15px;
        }
        .page-class{
            margin-top: 6px;
            float: right;
        }
    }
</style>
