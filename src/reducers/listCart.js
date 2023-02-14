import { ACT_BUY, ACT_DELETE, ACT_UPDATE } from "../constants/actionsType";
import { SHOPPING_CART } from "../constants/shoppingCart";
let initialState = [];
let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))
const calTotalAmout = (carts) => {
    let totalAmout = 0;
    carts.forEach(cart => {
        totalAmout += cart.quantity * cart.product.price
    });
    return totalAmout;
}
const getIndexCart = (carts, productId) => {
    for (let index = 0; index < carts.length; index++) {
        if (carts[index].product.productId === productId) {
            return index;
        }
    }
    return -1;
}
initialState = (shoppingCart != null && shoppingCart.length > 0 ? shoppingCart : initialState)
const listCart = (state = initialState, action) => {
    switch (action.type) {
        case ACT_BUY:
            if (state.length == 0) {
                let cartNew = { product: action.payload.product, quantity: action.payload.quantity }
                state = [...state, cartNew]
                localStorage.setItem(SHOPPING_CART, JSON.stringify(state))
                localStorage.setItem("totalAmount", calTotalAmout(state))
                return [...state];
            } else {
                let index = getIndexCart(state, action.payload.product.productId);
                if (index === -1) {
                    // Sản phẩm chưa tồn tại trong giỏ hàng
                    let cartNew = { product: action.payload.product, quantity: action.payload.quantity };
                    state.push(cartNew);
                } else {
                    // Sản phẩm đã tồn tại trong giỏ hàng
                    state[index].quantity += parseInt(action.payload.quantity);
                }
                localStorage.setItem(SHOPPING_CART, JSON.stringify(state));
                localStorage.setItem("totalAmount", calTotalAmout(state));
                return [...state];
            }
        case ACT_UPDATE:
            let index = getIndexCart(state, action.payload.product.productId);
            state[index].quantity = action.payload.quantity
            localStorage.setItem(SHOPPING_CART, JSON.stringify(state));
            localStorage.setItem("totalAmount", calTotalAmout(state));
            return [...state]
        case ACT_DELETE:
            let newListCart = state.filter((cart) => cart.product.productId !== action.payload)
            localStorage.setItem(SHOPPING_CART, JSON.stringify(newListCart));
            localStorage.setItem("totalAmount", calTotalAmout(newListCart));
            return newListCart
        default:
            return state;
    }
}
export default listCart