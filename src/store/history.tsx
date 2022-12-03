import { createSlice, PayloadAction } from "@reduxjs/toolkit"
const initialState: any[] = []
const cardSlice = createSlice({
    initialState,
    name: "cards",
    reducers: {
        add(state, action: PayloadAction<{}>) {
            state.push(action.payload)
        },
        remove(state, action: PayloadAction<{}>) {
            state.splice(state.findIndex((arrow) => arrow.id == action.payload), 1);
            // return state.filter((items)=>items.cid!==action.payload)
        }
    }

})
export const { add, remove } = cardSlice.actions;
export default cardSlice.reducer;
