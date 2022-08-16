import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  // me: parent of Posts is App.js (line 54) and it's passing likePost and posts into the rendered Posts component
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
    
      {posts.map((postObj) => {
        return (
          <Post 
          key={postObj.id} 
          post={postObj} 
          likePost={likePost}
          />
        )
      })}
    </div>
  );
};

export default Posts;

//line 19 it should've been postObj aka each object aka each post... not 'posts' which is the whole array

//this component is responsible for rendering the list of objects in the array and gives data to the Post component