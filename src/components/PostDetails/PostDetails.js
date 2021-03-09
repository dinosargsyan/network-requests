import React, { Component } from 'react';
import { Modal, Button } from '@material-ui/core';
import Post from 'components/Post/Post';
import fbService from 'api/fbService';

import './PostDetails.scss'

export class PostDetails extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        console.log(props.match.params.postId);

        this.state = {
            post: null,
            isOpenEditPopUp: false,
            titleValue: '',
            bodyValue: ''
        }
    }
    componentDidMount() {
        fbService.getPost(this.props.match.params.postId)
            .then(data => {
                this.setState({
                    post: data,
                    titleValue: data.title,
                    bodyValue: data.body
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
        fbService.updatePost(this.state.post.id,{
            ...this.state.post,
            title: this.state.titleValue,
            body: this.state.bodyValue
        }).then(res=>{this.setState({
            post:{...this.state.post, title: this.state.titleValue, body: this.state.bodyValue},
            isOpenEditPopUp:false
        })
    })
    }

    render() {
        const { post, isOpenEditPopUp, titleValue,bodyValue } = this.state;
        if (!post) {
            return <span>Loading...</span>
        }
        return (
            <div className="app-post__post-details">

                <Post post={post} edit={this.toggleEditPopUp} />
                <Modal
                    open={isOpenEditPopUp}
                    onClose={this.toggleEditPopUp}
                    className="app-post__post-details__modal"
                >
                    <div className="app-post__post-details__modal__inner">
                     <input value={titleValue}  onChange={(e)=>this.onChangeValue('titleValue', e.target.value)}/>     
                     <input value={bodyValue}  onChange={(e)=>this.onChangeValue('bodyValue', e.target.value)}/>     
                     <Button variant="contained" color="primary" onClick={this.savePost}> Save </Button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default PostDetails
