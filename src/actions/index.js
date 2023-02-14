import * as types from "../constants/actionsType"

export const act_buy= (product,quantity)=>{
    return {
        type: types.ACT_BUY,
        payload:{product,quantity}
    }
}
export const act_update=(product,quantity)=>{
    return {
        type:types.ACT_UPDATE,
        payload:{product,quantity}
    }
}
export const act_del=(productId)=>{
    return{
        type:types.ACT_DELETE,
        payload:productId
    }
}
export const act_change_notify=(message)=>{
    return {
        type: types.ACT_CHANGE_NOTIFY,
        payload:message
    }
}