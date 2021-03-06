//import 'react' from React;

class Service{
    constructor(){
        this.baseUrl = "https://jsonplaceholder.typicode.com";
    }
    _request = (method,url,data=null) =>{
        return fetch(`${this.baseUrl}${url}`, {
              method,
              headers: data ? {'Content-Type':'application/json'} : {},
              body: data ? JSON.stringify(data) : null
         })
         .then(res=>{
             if(res.status<400){
                 return res.json();
             }
             else{
                 throw new Error("Network Error");
             }
         })
   }
    getAllPost = () =>{
            return this._request('GET','/posts')
    }
    updatePost=(id,data) =>{
        return this._request('PATCH',`/posts/${id}`,data)
    } 
    
    getFewPosts = (start,limit) =>{
        return new Promise ((resolve,reject)=>{
                setTimeout(()=>{
            return resolve (this._request('GET',`/posts?_start=${start}&_limit=${limit}`))
        },1000)
        })
    }  
    getPost = (id) =>{
        return this._request('GET',`/posts/${id}`);
    }
    deletePost = (id) => {
        return this._request('DELETE', `/posts/${id}`)
    }     
    createPost = (data) => {
        return this._request('POST', '/posts' ,data);
    }       
    
}

const service = new Service();
export default service;

  