import React, { Component } from 'react';
// import { LoopCircleLoading } from 'react-loadingg';

import Post from 'components/Post/Post';

//import {getAllPosts} from 'api/requestData';
import service from 'api/Service';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Loading from 'components/Loading/Loading';

import "./Posts.scss";
import fbService from 'api/fbService';

const limit = 5;
export class Posts extends Component {

        state = {
            posts: [],
            startAt: 0,
            title: "",
            body: "",
            hasMore: false,
            loading: false
        }
    componentDidMount(){
   
        
        
            fbService.getPosts()
            .then(resJson=>{
                if(resJson.length !== 0)
                this.setState({
                    posts: resJson,
                    hasMore: true
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
    
    deletePosts = (id) => {
        fbService.deletePost(id) 
        .then(() =>{
            this.setState({
            posts:  this.state.posts.filter((el) =>{
              return  el.id !== id;
            })
          })
        })
    }
    createPost = () =>{
        fbService.createPost({
            title: this.state.title,
            body: this.state.body,
        })
        .then(data=>{
           // data.sort((a,b) => b.id-a.id);
            this.setState({
                posts: [data,...this.state.posts]
            })
        })
    }
    getMore=()=>{
        const newStartAt = this.state.startAt + limit + 1;
        this.setState({
            startAt: newStartAt,
            loading: true
        })
        fbService.getPosts(newStartAt , newStartAt + limit)
        .then(data=>{
            console.log(data);
            this.setState({
                posts: [ ...this.state.posts, ...data],
                hasMore: data.length <limit ? false : true,
                loading: false
            })
        })
    }
    
    getInputValue = (name, value) =>{
        this.setState({
            [name]: value
        })
    }
    

    render() {
        return (
            <>
        <div className="app-posts">   
       
         <div className="app-posts__inputs">
                {/* <Button onClick={this.updatePosts} > Update Post</Button>
                <Button onClick = {this.deletePosts }> Delete Post</Button> */}
                {/* <Loading /> */}
                <Input onChange={(e)=>this.getInputValue('title', e.target.value)} value={this.state.title} className="app-posts__input" placeholder="Title" />
                <Input onChange={(e)=>this.getInputValue('body', e.target.value)} value={this.state.body} className="app-posts__input" placeholder="Text" />
                <Button onClick={this.createPost} className="app-posts__inputs__publish">Publish</Button>
                </div>
                {
                    this.state.posts.map(post =>{
                        return (
                        <Post 
                           key={post.id}
                           post={post}
                           className="app-posts__post"
                           isLink
                           remove={()=>this.deletePosts(post.id)}
                        />
                        )
                    })
                   }
                
            </div>
                   <div className="app-posts__getMore">
  {this.state.loading ? <Input /> : this.state.hasMore && <Button onClick={this.getMore}  className="app-posts__inputs__publish">Get More</Button> }
                   </div>   
                   </>           
        )
    }
}

export default Posts;
