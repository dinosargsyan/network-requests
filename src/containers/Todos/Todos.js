import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { reduxActionTypes } from 'reducers/reduxActionTypes';
import {store} from 'reducers';
import ToDo from 'components/Todo/ToDo'
import fbService from 'api/fbService';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

import './Todos.scss';
const limit =5;

const Todos = (props) => {
useEffect(()=>{
    fbService.getTodos()
    .then(data=>{
        props.setReduxTodos(data);
    })
},[]);

const deleteTodos = (id) =>{
    fbService.deleteTodo(id)
    .then(()=>{
        fbService.getTodos(0, limit)
        .then(res=>{
            props.setReduxTodos(res);
        })
    })
}


    console.log('props',props)
    if(!props.todos){
        return <span>Loading...</span>
    }
    return (

       
    
        <div>
            { 
            
            props.todos.map(todo =>{
                return ( 
             <ToDo
                key={todo.id}
                todo={todo}
                className="app-todos__todo"
                isLink
               remove={() => deleteTodos(todo.id)}
            /> 
                )
            } )
        }
            </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = {
    setReduxTodos: (todos)=>({
        type: reduxActionTypes.SET_TODOS,
        payload: {
            todos
        }
    })
}


export default connect(mapStateToProps,mapDispatchToProps)(Todos);
