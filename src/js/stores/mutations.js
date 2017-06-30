/**
 * mutations
 * 处理状态的变化
 * 1.变量作为方法名的时候需要给变量外面包一层“[]”
 */
import { PLUS,MINUS } from './types'

export default {
    [PLUS](state){
        state.num++;
    },
    [MINUS](state){
        state.num--;
    }
}