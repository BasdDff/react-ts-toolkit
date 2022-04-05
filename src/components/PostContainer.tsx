import React, {useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../types/IPost";

const PostContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchPostsQuery(50)
    const [createPost, {error: createError, isLoading: isCreateLoading}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    return (
        <div>
            <button onClick={handleCreate}>
                Add new post
            </button>
            {isLoading && <div> Loading... </div>}
            {error && <div> error </div>}
            {posts?.map((post) =>
                <PostItem post={post} remove={deletePost} update={updatePost}/>
            )}
        </div>
    );
};

export default PostContainer;