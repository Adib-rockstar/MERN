import React from 'react';
import Post from './Post/post';
import useStyle from './style';
import { useSelector } from 'react-redux';

const Posts = () => {
    const post=new useSelector((state)=>state.posts);
    const classes = new useStyle();
    console.log(post);
    return(
    <>
        <h1>Posts</h1>
        <Post />
        <Post />
    </>
    )
}
export default Posts;