import service from 'api/Service';
import Post from 'components/Post/Post';
import React, { Component } from 'react'

export class PostDetails extends Component {
        constructor(props){
            super(props);
            console.log(props);
            console.log(props.match.params.postId);

            this.state={
                post:null
            }
        }
        componentDidMount(){
            service.getPost(this.props.match.params.postId)
            .then(data=>{
                this.setState({
                    post:data
                })
            })
        }

    render() {
        if(!this.state.post){
            return <span>Loading...</span>
        }
        return (
            <div>
                <Post post={this.state.post} />
            </div>
        )
    }
}

export default PostDetails
