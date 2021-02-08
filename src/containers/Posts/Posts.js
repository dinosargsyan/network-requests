import Post from 'components/Post/Post'
import React, { Component } from 'react'

export class Posts extends Component {

        state = {
            posts: []
        }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(resJson=>{
            this.setState({
                posts: resJson
            })
        })
    }
    render() {
        return (
            <div className="app-posts">
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
