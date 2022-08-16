import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';


const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props! (aka Posts.js?) 
  const { post, likePost } = props;
  // console.log(likePost) shows the function

  return (
    <div className='post-border'>
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>

      {/* Is LikeSection getting all the props it needs to work correctly? */}
      
      <LikeSection 
      likePost={() => likePost(post.id)} 
      numberOfLikes= {post.likes}
      />
      {/* looking at this component first then Comments component */}
       
      {/* Comments also wants its props! */}
      <Comments 
      comments={post.comments}
      />
       
    </div>
  );
};


export default Post;

// this component gives the info for an indivudal post 