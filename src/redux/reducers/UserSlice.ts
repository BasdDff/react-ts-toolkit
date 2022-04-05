import {IUser} from "../../types/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "../actions/user";

interface UserState {
    users: IUser[]
    loading: boolean
    error: null | string
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: { // = switch case in reducer
        // usersFetching(state) {
        //     state.loading = true
        // },
        // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
        //     state.loading = false
        //     state.error = ""
        //     state.users = action.payload
        // },
        // usersFetchingError(state, action: PayloadAction<string>) {
        //     state.loading = false
        //     state.error = action.payload
        // }
    },
    extraReducers: {
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
            state.loading = false
            state.error = ""
            state.users = action.payload
        },
        [fetchUsers.pending.type]: (state) => {
            state.loading = true
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false
            state.error = action.payload
        },
    }
})

export default userSlice.reducer