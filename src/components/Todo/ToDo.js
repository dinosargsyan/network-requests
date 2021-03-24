import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TodoDetails from 'components/TodoDetails/TodoDetails';
import Link from "components/Link/Link";
import { AppContext } from '../../context/AppContext';
import './ToDo.scss';

const ToDo = ({ todo, className, isLink = false, edit = () => { }, remove = () => {

} }) => {
    const context = useContext(AppContext);
    const removeHandler = (e) => {
        e.preventDefault();
        remove();
    }
    const Wrapper = ({ children }) => {
        const todoclassName = `app-todos${className}`
        return isLink ? (
            <div className={className}>
                <Link className={todoclassName} to={`/posts/${todo.id}`}>
                    {context.state.user && (

                        <Button className="app-posts__button" variant="contained" color="primary" onClick={removeHandler}>Remove</Button>
                    )}
                    {children}
                </Link>
            </div>
        ) : (
            <div className={todoclassName}>
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
            <span className="app-posts__post__title">{todo.title}</span>
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
export default ToDo;
