import React, {useEffect} from 'react';
import {useAppDispatch} from "./hooks/useAppDispatch";
import {useAppSelector} from "./hooks/useAppSelector";
import {fetchUsers} from "./redux/actions/user";
import PostContainer from "./components/PostContainer";

function App() {
    const dispatch = useAppDispatch()
    const {users, loading, error} = useAppSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            {loading && <div> Loading... </div>}
            {error && <div> {error} </div>}
            {users.map((user) =>
                <div>
                    {user.name}
                </div>
            )}
            <PostContainer/>
        </div>
    );
}

export default App;
