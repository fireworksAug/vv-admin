<template>
    <div class="step-container">
        <page-header describe="将用户不熟悉的表单操作分步指导用户完成"></page-header>
        <div class="content-box">
            <div class="step-box">
                <Steps :current="current">
                    <Step title="用户注册"></Step>
                    <Step title="输入密码"></Step>
                    <Step title="注册成功"></Step>
                </Steps>
            </div>
            <div class="form-box">
                <Form v-show="current === 0" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                    <FormItem label="Name" prop="name">
                        <Input v-model="formValidate.name" placeholder="Enter your name"/>
                    </FormItem>
                    <FormItem label="E-mail" prop="mail">
                        <Input v-model="formValidate.mail" placeholder="Enter your e-mail"/>
                    </FormItem>
                    <FormItem style="text-align: center">
                        <Button type="primary" @click="handleSubmit('formValidate')">下一步</Button>
                        <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                    </FormItem>
                </Form>

                <Row v-show="current === 1" style="text-align: center;margin-top: 6px">
                    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">
                        <FormItem label="Password" prop="passwd">
                            <Input type="password" v-model="formCustom.passwd"/>
                        </FormItem>
                        <FormItem label="Confirm" prop="passwdCheck">
                            <Input type="password" v-model="formCustom.passwdCheck"/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
                            <Button @click="handleBack" style="margin-left: 8px">上一步</Button>
                        </FormItem>
                    </Form>
                </Row>
                <Row  v-show="current === 2" style="text-align: center">
                    <h1>注册成功</h1>
                    <Button @click="handleBack" style="margin-left: 8px">返回</Button>
                </Row>
            </div>
        </div>
    </div>
</template>

<script>
    import PageHeader from "../../components/page-header/PageHeader";
    export default {
        name: "Index",
        components: {PageHeader},
        data() {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password again'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('The two input passwords do not match!'));
                } else {
                    callback();
                }
            };
            return {
                current: 0,
                formValidate: {
                    name: '',
                    mail: '',
                },
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.handleNext();
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            },
            /**
             * @description 下一步
             */
            handleNext() {
                if (this.current === 2) {
                    return;
                }
                this.current += 1;
            },
            handleBack() {
                if (this.current === 0) {
                    return;
                } else if(this.current === 2) {
                    this.current = 0;
                } else {
                    this.current -= 1;
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .step-container{
        position: relative;
        height: 100%;
        .content-box{
            height: calc(100% - 64px);
            padding: 12px;
            background-clip: content-box;
            background-color: #fff;
            .step-box{
                padding-left: 16px;
            }
            .ivu-steps{
                max-width: 700px;
                margin: 26px auto;
            }
            .form-box{
                width: 532px;
                height: 300px;
                margin: 100px auto;
            }
        }
    }
</style>