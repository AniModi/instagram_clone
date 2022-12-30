import React from 'react';
import "./post.css"
import Dummy from "./../../images/dummyImage.jpg"
const Post = () => {
    return (
        <>
        <div id="post-div">
            <div id="postDetail">
                <div id="postBy">{"user1"}</div>
                <div id="postTime">{"1 hour ago"}</div>
            </div>
            <div id="postContent">
                <div id="postPic">
                    <img src={Dummy} alt="dummy"></img>
                </div>
                <div id="caption">{"dummy post"}</div>
            </div>
            <div id="interact-div">
                <div id="like"><button id="like-btn">Like</button></div>
                <div id="comment"><button id="comment-btn">Comment</button></div>
            </div>
        </div>
        </>
    );
}

export default Post;