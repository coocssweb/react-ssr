import log4js from 'log4js';
import path from 'path';
log4js.configure(
    {
        appenders: {
            templateFile: {
                type: 'dateFile',
                filename: `${path.join(__dirname, '../../', 'logs/render/index.log')}`,
                pattern: '-yyyy-MM-dd.log',
                alwaysIncludePattern: true,
                compress: false,
                encoding: 'utf-8',
                category : 'templateFile'
            },
            dateFile: {
                type: 'dateFile',
                filename: `${path.join(__dirname, '../../', 'logs/date/index.log')}`,
                pattern: '-yyyy-MM-dd.log',
                alwaysIncludePattern: true,
                compress: false,
                encoding: 'utf-8',
                category : 'dateFile'
            },
            errorFile: {
                type: 'dateFile',
                filename: `${path.join(__dirname, '../../', 'log/error/index.log')}`,
                pattern: '-yyyy-MM-dd.log',
                alwaysIncludePattern: true,
                compress: false,
                encoding: 'utf-8',
                category : 'errorFile'
            },
            timeFile: {
                type: 'dateFile',
                filename: `${path.join(__dirname, '../../', 'log/request/index.log')}`,
                pattern: '-yyyy-MM-dd.log',
                alwaysIncludePattern: true,
                compress: false,
                encoding: 'utf-8',
                category : 'timeFile'
            },
            mail: {
                type: '@log4js-node/smtp',
                recipients: 'wjx2@meitu.com,wlw1@meitu.com,srb@meitu.com,lyx4@meitu.com',
                sendInterval: 600,
                transport: 'SMTP',
                subject: '错误报警-PC_MAIL',
                sender: '1974740999@qq.com',
                SMTP: {
                    host: 'smtp.qq.com',
                    secureConnection: true,
                    port: 465,
                    auth: {
                        user: '1974740999@qq.com',
                        pass: 'dqwkmmcfjfdxbcig'
                    },
                    debug: true
                }
            }
        },
        categories: {
            templateFile: { appenders: ['templateFile'], level: 'trace' },
            dateFile: { appenders: ['dateFile'], level: 'trace' },
            timeFile: { appenders: ['timeFile'], level: 'trace' },
            errorFile: { appenders: ['errorFile'], level: 'error' },
            mail:  { appenders: ['mail'], level: 'error' },
            default: { appenders: ['dateFile', 'errorFile'], level: 'trace' }
        }
    }
);
