/**
 * getters
 * 返回状态值
 */

export default{
    num(state){
        return state.num;
    },
    isodd(state){
        return state.num%2==0?'偶数':'奇数';
    }
}