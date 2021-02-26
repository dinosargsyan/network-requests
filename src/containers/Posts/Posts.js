import React, { Component } from 'react';
// import { LoopCircleLoading } from 'react-loadingg';

import Post from 'components/Post/Post';

//import {getAllPosts} from 'api/requestData';
import service from 'api/Service';
import Button from 'components/Button/Button';
import Input from 'components/Input/Input';
import Loading from 'components/Loading/Loading';

import "./Posts.scss";

const limit = 5;
export class Posts extends Component {

        state = {
            posts: [],
            start: 0,
            title: "",
            body: "",
            hasMore: false,
            loading: false
        }
    componentDidMount(){
    //  getAllPosts()
    //   .then(resJson=>{
    //       this.setState({
    //           posts: resJson
    //       })
    //   })
        //  service.getAllPost()
        //  .then(resJson=>{
            
        //      resJson.sort((a,b) => b.id-a.id);
        //      this.setState({
        //          posts: resJson
        //    })

        //       })
        
            service.getFewPosts(this.state.start,limit)
            .then(resJson=>{
                if(resJson.length !== 0)
                resJson.sort((a,b) => b.id-a.id);
                this.setState({
                    posts: resJson,
                    hasMore: true
              })
           })
        
           .catch(
              //alert("error")
    
           )
        
        

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
        service.deletePost(id) 
        .then(() =>{
            this.setState({
            posts:  this.state.posts.filter((el =>{
              return  el.id !== id;
            }))
          })
        })
    }
    createPost = () =>{
        service.createPost({
            title: this.state.title,
            body: this.state.body,
            userId: 1
        })
        .then(data=>{
           // data.sort((a,b) => b.id-a.id);
            this.setState({
                posts: [data,...this.state.posts]
            })
        })
    }
    getMore=()=>{
        const newStart= this.state.start + limit;
        this.setState({
            start: newStart,
            loading: true
        })
        service.getFewPosts(newStart,limit)
        .then(data=>{
            
            data.sort((a,b) => b.id-a.id);
            this.setState({
                posts: [ ...this.state.posts, ...data],
                hasMore: data.length <5 ? false : true,
                loading: false
            })
        })
    }
    
    getTitleInputValue = (event) =>{
        this.setState({
            title: event.target.value
        })
    }
    getBodyInputValue = (event) =>{
        this.setState({
            body: event.target.value
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
                <Input onChange={this.getTitleInputValue} value={this.state.title} className="app-posts__input" placeholder="Title" />
                <Input onChange={this.getBodyInputValue} value={this.state.body} className="app-posts__input" placeholder="Text" />
                <Button onClick={this.createPost} className="app-posts__inputs__publish">Publish</Button>
                </div>
                {
                    this.state.posts.map(post =>{
                        return (
                        <Post 
                        key={post.id}
                        post={post}
                        className="app-posts__post"
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
