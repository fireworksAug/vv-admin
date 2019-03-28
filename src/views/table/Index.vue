<template>
    <div class="table-container">
        <div class="search-form">
            <Form ref="formInline" :model="formInline" :label-width="80">
                <Row :gutter="16">
                    <Col :xs="24" :md="12" :lg="6">
                        <FormItem prop="pro_num" label="产品编号">
                            <Input type="text" v-model="formInline.pro_num" placeholder="产品编号"/>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :md="12" :lg="6">
                        <FormItem prop="pro_name" label="产品名称">
                            <Input type="text" v-model="formInline.pro_name" placeholder="产品名称"/>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :md="12" :lg="6">
                        <FormItem prop="pro_status" label="产品状态">
                            <Select v-model="formInline.pro_status">
                                <Option v-for="item in proStatus" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </FormItem>
                    </Col>
                    <Col :xs="24" :md="12" :lg="6">
                        <FormItem>
                            <Button type="primary" @click="handleClick">查询</Button>
                            <Button @click="handleReset('formInline')" style="margin-left: 8px">重置</Button>
                        </FormItem>
                    </Col>
                </Row>
            </Form>
        </div>
       <v-table :border="true"
                :loading="loading"
                :columns="columns"
                :data="tableData"
                :show-alter="true"
                @size-change="handleSizeChange"
                @page-change="handlePageChange">
           <div slot="btn_group" class="btn-group">
               <Button type="primary" icon="md-add">新增</Button>
           </div>
       </v-table>
    </div>
</template>

<script>
    import VTable from "../../components/VTable/VTable";
    import {getTableData} from "../../api/table";
    export default {
        name: "Index",
        components: {VTable},
        data() {
            return {
                pageSize: 10,
                loading: false,
                formInline: {
                    pro_num: '',
                    pro_name: '',
                    pro_status: ''
                },
                proStatus: [
                    {
                        value: '1',
                        label: '在线'
                    }, {
                        value: '2',
                        label: '离线'
                    }
                ],
                checkLen: 0,
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '产品编号',
                        key: 'pro_num'
                    },
                    {
                        title: '产品名称',
                        key: 'pro_name'
                    },
                    {
                        title: '状态',
                        key: 'pro_status',
                        render: (h,param) => {
                            const { row } = param;
                            if (row.pro_status === 1) {
                                return h('Badge', {
                                    props: {
                                        status: 'processing',
                                        text: '运行中'
                                    }
                                })
                            } else if (row.pro_status === 2) {
                                return h('Badge', {
                                    props: {
                                        status: 'default',
                                        text: '关闭'
                                    }
                                })
                            } else {
                                return h('Badge', {
                                    props: {
                                        status: 'error',
                                        text: '故障'
                                    }
                                })
                            }
                        }
                    },
                    {
                        title: '上线日期',
                        key: 'pro_date'
                    }
                ],
                tableData: []
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.handleClick();
            })
        },
        methods: {
            /**
             * @description 重置查询表单
             * @param form
             */
            handleReset(name) {
                this.$refs[name].resetFields();
            },
            /**
             * @description 查询表单数据
             */
            handleClick() {
                this.loading = true;
                getTableData(this.formInline,this.pageSize).then(res => {
                    this.loading = false;
                    this.tableData = res.data;
                })
            },
            /**
             * @description 页码改变事件
             * @param page
             */
            handlePageChange(page) {
                this.handleClick();
            },
            /**
             * @description 每页条数改变触发
             * @param size
             */
            handleSizeChange(size){
                this.pageSize = size;
                this.handleClick();
            }
        }
    }
</script>

<style scoped lang="less">
    .pad{
        padding: 12px;
    }
    .table-container {
        padding: 12px;
        background-clip: content-box;
        background-color: #fff;
        .search-form{
            .pad;
        }
        .alter-box{
            .pad;
        }
        .table-box{
            .pad;
        }
        .btn-group{
            margin-bottom: 6px;
        }
    }
</style>
