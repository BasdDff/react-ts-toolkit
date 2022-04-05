import {AppDispatch} from "../index";
import axios from "axios";
import {IUser} from "../../types/IUser";
import {userSlice} from "../reducers/UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`)
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch (err) {
//         dispatch(userSlice.actions.usersFetchingError((err as Error).message))
//     }
// }

export const fetchUsers = createAsyncThunk(
    "user/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/userss`)
            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message)
        }
    }
)