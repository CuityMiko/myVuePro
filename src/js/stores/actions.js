/**
 * actions
 * 处理事件
 */
import { PLUS,MINUS,EVENODD } from './types'

export default{
    [PLUS]:({ commit })=>{
        commit(PLUS);
    },
    [MINUS]:({ commit })=>{
        commit(MINUS);
    },
    [EVENODD]:({ commit,state })=>{
        if(state.num%2==0){
            commit(PLUS);
        }else{
            commit(MINUS);
        }
    }
}