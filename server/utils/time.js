/**
 * Created by cooky on 2018/8/7.
 */
export default (timestamp, fmt = 'yyyy-MM-dd hh:mm:ss') => {
    let date = new Date(timestamp);
    let o = {
        'M+': date.getMonth() + 1,                     // 月份
        'd+': date.getDate(),                          // 日
        'h+': date.getHours(),                         // 小时
        'm+': date.getMinutes(),                       // 分
        's+': date.getSeconds(),                       // 秒
        'S': date.getMilliseconds()                    // 毫秒
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }

    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
    }
    return fmt;
};