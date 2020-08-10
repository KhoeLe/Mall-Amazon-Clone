// biến điếm của basket 
export const initialState ={
    basket: [],
    user:null,
};
    const Reducer = (state,action)=> {
        console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
        //logic add items vào giỏ hàng (basket)
                return{
                    ...state,
                    basket:[...state.basket, action.item]
                    };
            case 'REMOVE_FROM_BASKET':
            //logic xóa sản phẩm trong giỏ hàng
                return{
                    state};
        default:
        return state;
    }
    }

export default Reducer;

