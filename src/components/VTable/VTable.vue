<template>
    <div class="v-table-class">
        <Alert show-icon
        v-if="showAlter">
            当前已选择 <span style="color: dodgerblue;font-weight: bold;font-size: 16px">{{checkLen}}</span> 项
        </Alert>
        <slot name="btn_group">

        </slot>
        <Table :border="border"
               ref="selection"
               :columns="columns"
               :loading="loading"
               :data="data"
               height="500"
               @on-selection-change="selectChange"></Table>
        <Row class="page-class">
            <Page :total="100"
                  :current="num"
                  :page-size="10"
                  @on-change="pageChange"
                  @on-page-size-change="pageSizeChange"
                  show-sizer show-elevator show-total />
        </Row>
    </div>
</template>

<script>
    export default {
        name: "VTable",
        props: {
            loading: {
                type: Boolean,
                default: false
            },
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
                num: 1, // 当前页码
                selectData: [], // 选中表格数据项集合
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
            },
            /**
             * @description 切换每页条数时触发，返回切换后的每页条数
             * @param size
             */
            pageSizeChange(size) {
                this.$emit('size-change', size);
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
            text-align: right;
        }
    }
</style>
