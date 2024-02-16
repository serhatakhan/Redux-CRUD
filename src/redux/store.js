/*
 ! store
 * 1. redux kütüphanesinden "createStore" metodu import edilir.
 * 2. store içerisinde tutulacak olan verilerin her biri için reducer oluşturulur. (userReducer, todoReducer vs..)
 * 3. oluşturulan reducer'lar "combineReducers" ile birleştirilir. çünkü createStore metodu bir reducer kabul ediyor. bizde elimizdeki reducerları birleştirip createStore'a vereceğiz.
 * 4. store'a, oluşturulan reducer'lar tanıtılır.
 * 5. en son oluşturuğumuz store'u da export edeceğiz.
 
*/

import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

// birden fazla reducer varsa, bunları birleştirmeye yarar.
const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

// store oluştur
const store = createStore(rootReducer);

// export et
export default store
