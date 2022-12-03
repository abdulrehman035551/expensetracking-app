import { configureStore } from "@reduxjs/toolkit";
import CardReducer from "./history"
const store = configureStore({
    reducer: {
     cards: CardReducer
    }
})
export default store;