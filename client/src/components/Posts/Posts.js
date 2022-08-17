import React from 'react';
import Post from './Post/post';
import useStyle from './style';
const Posts = () => {
    const classes = new useStyle();
    return(
    <>
        <h1>Posts</h1>
        <Post />
        <Post />
    </>
    )
}
export default Posts;