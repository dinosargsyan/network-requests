import React, { Component } from 'react';
import { Modal, Button } from '@material-ui/core';
import ToDo from 'components/Todo/ToDo';
import fbService from 'api/fbService';

import './TodoDetails.scss'
import Input from 'components/Input/Input';

export class TodoDetails extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        console.log(props.match.params.todoId);

        this.state = {
            todo: null,
            isOpenEditPopUp: false,
            titleValue: ''
           
        }
    }
    componentDidMount() {
        fbService.getTodo(this.props.match.params.todoId)
            .then(data => {
                this.setState({
                    todo: data,
                    titleValue: data.title
                })
            })
    }

    toggleEditPopUp = () => {
        this.setState(prevState => ({
            isOpenEditPopUp: !prevState.isOpenEditPopUp
        }))
        console.log(this.state.isOpenEditPopUp)
    }

    onChangeValue = (name, value) =>{
        this.setState({
            [name]: value 
        })
    }

    savePost = () =>{
        fbService.updateTodo(this.state.todo.id,{
            ...this.state.todo,
            title: this.state.titleValue
        }).then(res=>{this.setState({
            todo:{...this.state.todo, title: this.state.titleValue},
            isOpenEditPopUp:false
        })
    })
    }

    render() {
        const { todo, isOpenEditPopUp, titleValue } = this.state;
        if (!todo) {
            return <span>Loading...</span>
        }
        return (
            <div className="app-todo__todo-details">
                <ToDo todo={todo} edit={this.toggleEditPopUp} />
               
                <Modal
                    open={isOpenEditPopUp}
                    onClose={this.toggleEditPopUp}
                    className="app-todo__todo-details__modal"
                >
                    <div className="app-todo__todo-details__modal__inner">
                     <Input value={titleValue}  onChange={(e)=>this.onChangeValue('titleValue', e.target.value)}/>      
                     <Button variant="contained" color="primary" onClick={this.savePost}> Save </Button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default TodoDetails
