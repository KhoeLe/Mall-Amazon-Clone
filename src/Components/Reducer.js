    // biến điếm của basket
    export const initialState = {
    basket: [
        // {
        // id: "125",
        // tiles:
        //     "New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 128GB) - Space Gray (4th Generation) with AppleCare+ Bundle",
        // image:
        //     "https://cdn.tgdd.vn/Products/Images/522/221775/ipad-pro-12-9-inch-wifi-128gb-2020-xam-400x460-1-400x460.png",
        // price: 968.1,
        // ratting: 5,
        // },
        // {
        // id: "125",
        // tiles:
        //     "New Apple iPad Pro (12.9-inch, Wi-Fi + Cellular, 128GB) - Space Gray (4th Generation) with AppleCare+ Bundle",
        // image:
        //     "https://cdn.tgdd.vn/Products/Images/522/221775/ipad-pro-12-9-inch-wifi-128gb-2020-xam-400x460-1-400x460.png",
        // price: 968.1,
        // ratting: 5,
        // },
    ], //code chứa detail item
    user: null,
    };
    // var tinh tong so tien item trong basket 
    export const getBaketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount ,0);
    const Reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER": // add them để biết dc hành động của user
        return{
            ...state,
            user:action.user,
        }
        case "ADD_TO_BASKET":
        //logic add items vào giỏ hàng (basket)
        return {
            ...state,
            basket: [...state.basket, action.item],
        };
        case "REMOVE_FROM_BASKET":
        //logic xóa sản phẩm trong giỏ hàng
            let newBasket = [...state.basket];

            const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
            );

            if (index >= 0) {
            // item thoat khỏi basket
            newBasket.splice(index, 1);
            } else {
            console.warn(
            `Cant remove product (id: ${action.id} as its not basket`
            );
            }
        return { 
        ...state,
        basket: newBasket,

        };
        default:
        return state;
    }
    };

    export default Reducer;
  /// isues can't remove item