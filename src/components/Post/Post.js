import React from 'react';
import PropTypes from 'prop-types';

import './Post.scss';
import PostDetails from 'components/PostDetails/PostDetails';
import Link from "components/Link/Link";

const Post = ({post, className, isLink=false}) => {
    const Wrapper = ({children}) =>{
        const postclassName = `app-posts${className}`
            return isLink ?(
                <Link className={postclassName} to={`/posts/${post.id}`}>
            
                {children}
            </Link>
            ):(
                <div className={postclassName}>
                {children}
                {console.log("this is not link")}
            </div>
            )
    }
   
   
    return (
        
        <Wrapper>
        <span className="app-posts__post__title">{post.title}</span>
        <span className="app-posts__post__body">{post.body}</span>
        </Wrapper>
    )
}
// Post.PropTypes={
//     post: PropTypes.exact({
//         title: PropTypes.string.isRequired,
//         body: PropTypes.string.isRequired,
//         id: PropTypes.number,
//         userId: PropTypes.number
//     }),
//     className: PropTypes.string,
// }
export default Post;
