/**
 * api 处理基础类
 * Created by 王佳欣 on 2018/7/5.
 */
import Axios from 'axios';
import Config from '../config';
import querystring from 'querystring';
import log4js from 'log4js';
const loggerError = log4js.getLogger('errorFile');
const loggerData = log4js.getLogger('dateFile');
const loggerMail = log4js.getLogger('mail');

export default class Base {
    async request({
                      host = Config.api,
                      path,
                      data = {},
                      method = 'get',
                      responseType = 'json',
                      contentType = 'application/x-www-form-urlencoded',
                      accessToken
    }) {
        let requestData;
        let params;
        if (method === 'get') {
            params = data;
        } else if (method === 'post') {
            requestData = querystring.stringify(Object.assign({}, data));
        }

        let timestamp1 = (new Date()).valueOf();

        let result = await Axios({
            url: `${host}${path}`,
            method,
            data: requestData || {},
            params: params || {},
            timeout: 5000,
            headers: {
                'X-Access-Token': accessToken || '',
                'Content-Type': contentType
            }
        }).then((response) => {
            return response ? response.data : {};
        }).catch(error => {
            // 日志记录，错误日志
            loggerError.error(error);
            Config.logger && loggerMail.error(error);
            return error.response ? error.response.data : {meta: {code: 500, msg: `catch path: ${path}`}, response: {}};
        });

        // 日志记录，接口访问时长记录
        loggerData.trace(`${(new Date()).valueOf() - timestamp1}ms: ${path}`);

        return result;
    }
};
