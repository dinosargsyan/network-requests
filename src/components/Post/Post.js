import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import './Post.scss';
import PostDetails from 'components/PostDetails/PostDetails';
import Link from "components/Link/Link";
import { AppContext } from '../../context/AppContext';

const Post = ({ post, className, isLink = false, edit = () => { }, remove = () => {

} }) => {
    const context = useContext(AppContext);
    const removeHandler = (e) => {
        e.preventDefault();
        remove();
    }
    const Wrapper = ({ children }) => {
        const postclassName = `app-posts${className}`
        return isLink ? (
            <div className={className}>
                <Link className={postclassName} to={`/posts/${post.id}`}>
                    {context.state.user && (

                        <Button className="app-posts__button" variant="contained" color="primary" onClick={removeHandler}>Remove</Button>
                    )}
                    {children}
                </Link>
            </div>
        ) : (
            <div className={postclassName}>
                {context.state.user && (

                    <Button variant="contained" color="secondary" onClick={edit}>Edit</Button>
                )}
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
//         userId: PropTypes.number,
//            edit: PropTypes.func,
//     }),
//     className: PropTypes.string,
// }
export default Post;
