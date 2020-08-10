// cần thiết lập data layer
// cần đếm dc có bao nhiều basket 
import React, {createContext, useContext, useReducer} from "react";


// khai báo giá trị khởi tạo
// Nó là lớp giá trị (data layer)
export const StateContext = createContext();  

// create providers
// code defaul
export const StateProvider = ({reducer,initialState , children})  => 
    
    (
    <StateContext.Provider value= {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Sử dung UseStateValue trong component
// dùng biến khởi tạo data layer để cho giá trí người của biến điếm trở về 0
export const useStateValue = () => useContext(StateContext);
