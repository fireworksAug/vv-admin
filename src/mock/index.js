import Mock from 'mockjs';
import {loginTest,getUserInfoTest} from "./login";
import {getTable} from "./table";

Mock.mock(/\/login/, loginTest);
Mock.mock(/\/getUserInfo/, getUserInfoTest);
Mock.mock(/\/getTableData/, getTable)
