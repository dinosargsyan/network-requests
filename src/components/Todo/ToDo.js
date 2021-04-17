import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import {Button, Checkbox} from '@material-ui/core';
import TodoDetails from 'components/TodoDetails/TodoDetails';
import Link from "components/Link/Link";
import { AppContext } from '../../context/AppContext';
import './ToDo.scss';
import fbService from 'api/fbService';

const ToDo = ({ todo, className, isLink = false, edit = () => { }, remove = () => {

} }) => {
    const context = useContext(AppContext);
    const [checked, setChecked] = useState(true);
    const removeHandler = (e) => {
        e.preventDefault();
        remove();
    }
    const handleChange = (event) => {
        setChecked(event.target.checked);
        
      }

    const Wrapper = ({ children }) => {
        const todoclassName = `app-todos${className}`
        return isLink ? (
            <div className={className}>
                <Link className={todoclassName} to={`/todos/${todo.id}`}>
                    {context.state.user && (

                        <Button className="app-todos__button" variant="contained" color="primary" onClick={removeHandler}>Remove</Button>
                    )}
                    {children}
                </Link>
            </div>
        ) : (
            <div className={todoclassName}>
                {context.state.user && (
                        <>
                    <Button variant="contained" color="secondary" onClick={edit}>Edit</Button>
                    <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  /> Complete
                  </>
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
