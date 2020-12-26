
import Vue from 'vue';
// 判断参数是否是其中之一
export function oneOf (value, validList,errType = '类型') {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    console.error(`${errType}必须是${validList.join('、')}之一`);
    return false;
}