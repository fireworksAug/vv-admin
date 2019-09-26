<template>
    <Header class="header-box" :style="getHeaderColor">
        <div class="title-box">
            <img src="../../../../assets/images/app/logo.png"/>
            <h1>Vue-iView-admin</h1>
        </div>
        <div class="tool-box">
            <ul class="ul-box">
                <li class="li-box">
                    <Badge dot>
                        <Icon color="white" size="25" type="md-notifications"/>
                    </Badge>
                </li>
                <li class="li-box">
                    <Dropdown trigger="click" @on-click="handleClick">
                        <Icon color="white" size="25" type="md-settings"/>
                        <DropdownMenu slot="list" class="drop-class">
                            <Dropdown placement="right-start">
                                <DropdownItem>
                                    {{$t('navBar.setLang')}}
                                    <Icon style="margin-top:-3px" type="ios-arrow-forward"></Icon>
                                </DropdownItem>
                                <DropdownMenu slot="list">
                                    <DropdownItem name="chinese">{{$t('navBar.chinese')}}</DropdownItem>
                                    <DropdownItem name="english">{{$t('navBar.english')}}</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown placement="right-start">
                                <DropdownItem>
                                    {{$t('navBar.setTheme')}}
                                    <Icon style="margin-top:-3px" type="ios-arrow-forward"></Icon>
                                </DropdownItem>
                                <DropdownMenu slot="list">
                                    <DropdownItem name="dark">亮黑色</DropdownItem>
                                    <DropdownItem name="light">标准色</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </DropdownMenu>
                    </Dropdown>
                </li>
                <li class="li-box" @click="changeFull">
                    <Icon color="white" size="25" :type="fullScreen?'md-contract':'md-expand'"/>
                </li>
                <li class="li-box">
                    <Dropdown trigger="click" @on-click="handleClick">
                        <Icon color="white" size="30" type="md-contact"/>
                        <DropdownMenu slot="list" class="drop-class">
                            <DropdownItem name="personInfo">{{$t('base.information')}}</DropdownItem>
                            <DropdownItem name="password">{{$t('base.password')}}</DropdownItem>
                            <DropdownItem name="logout">{{$t('base.logout')}}</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </li>
            </ul>
        </div>
        <Modal
                v-model="modal6"
                title="退出系统"
                :loading="loading"
                @on-ok="logout">
            <p>是否退出本系统？</p>
        </Modal>
    </Header>
</template>

<script>
    import {clearToken} from "../../../../until/cookie";
    import { setLang,setTheme } from "../../../../until/localStorage";
    import { themeObj } from "../../../../config/theme-config";
    import {clearLocalStroage} from "../../../../until/localStorage";

    export default {
        name: "AHeader",
        data() {
            return {
                fullScreen: false,
                modal6: false,
                loading: true
            }
        },
        computed: {
            getHeaderColor() {
                return {
                    backgroundColor: this.$store.state.headerStyle
                };
            }
        },
        methods: {
            changeFull() {
                this.fullScreen = !this.fullScreen;
                if ((document.fullScreenElement !== undefined && document.fullScreenElement === null)
                    || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null)
                    || (document.mozFullScreen !== undefined && !document.mozFullScreen)
                    || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
                    if (document.documentElement.requestFullScreen) {
                        document.documentElement.requestFullScreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                        document.documentElement.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullScreen) {
                        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                    } else if (document.documentElement.msRequestFullscreen) {
                        document.documentElement.msRequestFullscreen();
                    }
                } else {
                    if (document.cancelFullScreen) {
                        document.cancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                }
            },
            handleClick(name) {
                if (name === 'chinese') {
                    setLang('zh')
                    this.$i18n.locale = 'zh';
                } else if (name === 'english') {
                    setLang('en');
                    this.$i18n.locale = 'en';
                } else if(name === 'dark') {
                    setTheme('header',themeObj.dark.headerBg);
                    setTheme('sider', themeObj.dark.siderBg);
                    setTheme('theme', themeObj.dark.theme);
                    this.$store.commit('SET_THEME')
                } else if (name === 'light') {
                    setTheme('header',themeObj.light.headerBg);
                    setTheme('sider', themeObj.light.siderBg);
                    setTheme('theme', themeObj.light.theme);
                    this.$store.commit('SET_THEME')
                } else if (name === 'personInfo') {
                    //
                } else if (name === 'password') {
                    //
                } else if (name === 'logout') {
                    this.modal6 = true;
                } else {
                    //
                }
            },
            logout() {
                clearToken().then(() => {
                    clearLocalStroage();
                    this.modal6 = false;
                    location.reload();
                }).catch(err => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .header-box {
        padding: 10px;
        background-color: rgb(0, 145, 255);

        .tool-box {
            float: right;
        }

        .title-box {
            float: left;
            width: 350px;
            height: 100%;

            img {
                width: 44px;
                height: 44px;
                float: left;
            }

            h1 {
                height: 100%;
                line-height: 44px;
                color: white;
                display: inline-block;
            }
        }

        .other-box {
            float: left;
            margin-left: 15px;
            width: 200px;
            height: 100%;
            background-color: rgba(255, 255, 255, .1);

            ul {
                width: 100%;
                height: 100%;

                li {
                    list-style: none;
                    float: left;
                    text-align: center;
                    cursor: pointer;
                    border: 1px solid transparent;
                    border-radius: 5px;
                    margin-right: 6px;
                    width: 40px;
                    height: 35px;
                    line-height: 32px;

                }
            }
        }

        .ul-box {
            width: 192px;
            float: right;
            height: 100%;
            padding: 4px;
        }

        .ul-box .li-box {
            list-style: none;
            float: left;
            width: 40px;
            height: 35px;
            line-height: 32px;
            text-align: center;
            cursor: pointer;
            border: 1px solid transparent;
            border-radius: 5px;
            margin-right: 6px;

            &:hover {
                background-color: rgba(255, 255, 255, .1);
            }

            .drop-class li {
                padding-left: 0px;
                padding-right: 0px;
            }
        }
    }
</style>
