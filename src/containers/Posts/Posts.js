import React, { Component } from 'react';

import Post from 'components/Post/Post';

//import {getAllPosts} from 'api/requestData';
import service from 'api/Service';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';

export class Posts extends Component {

        state = {
            posts: [],
            start: "",
            limit: ""
        }

    componentDidMount(){
    //  getAllPosts()
    //   .then(resJson=>{
    //       this.setState({
    //           posts: resJson
    //       })
    //   })
         service.getAllPost()
         .then(resJson=>{
                   this.setState({
                       posts: resJson
                 })
              })

    }

    updatePosts=() => {
        service.updatePost(1,{title: 'I like this Title'})
        .then(data=>{
            const NewPost = this.state.posts.map(el=>{
                if(el.id===data.id){
                    return data;
                }
                return el;
            })
            this.setState({
                posts: NewPost
            })
        })
    }
    getFewPost = () =>{
        service.getFewPosts(this.state.start,this.state.limit)
        .then(resJson=>{
            this.setState({
                posts: resJson
          })
       })
       .catch(
          //alert("error")

       )
    }
    getStartInputValue=(event)=>{
            this.setState({
                start: event.target.value
            })
    }
    getLimitInputValue=(event)=>{
        this.setState({
            limit: event.target.value
        })
}
    render() {
        return (
            <div className="app-posts">
                <Button onClick={this.updatePosts} > Update Post</Button>
                <Button onClick={this.getFewPost} > Get Limited Posts</Button>
                <Input onChange={this.getStartInputValue} value={this.state.start} placeholder="Start" />
                <Input onChange={this.getLimitInputValue} value={this.state.limit} placeholder="Limit"/>
                {
                    this.state.posts.map(post =>{
                        return <Post 
                        key={post.id}
                        post={post}
                        className="app-posts__post"
                        />
                    })
                   }
                
            </div>
        )
    }
}

export default Posts;
