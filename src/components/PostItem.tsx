import React, {FC} from 'react';
import {IPost} from "../types/IPost";

interface PostItemProps {
    post: IPost
    remove: (post: IPost) => void
    update: (post: IPost) => void
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {

    const handleEdit = (e: React.MouseEvent) => {
        const title = prompt(post.title) || ""
        update({...post, title})
    }

    return (
        <div>
            {post.id}. {post.title}
            <button onClick={() => remove(post)}>Delete </button>
            <button onClick={handleEdit}>Edit </button>
        </div>
    );
};

export default PostItem;