import React from 'react';
import PropTypes from 'prop-types';

import './Post.scss';

const Post = ({post, className=''}) => {
    return (
        <div className={`app-posts ${className}`}>
            <span className="app-posts__post__title">{post.title}</span>
            <span className="app-posts__post__body">{post.body}</span>
        </div>
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
