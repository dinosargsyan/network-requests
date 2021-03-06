import postMockup from "data-mockup/posts.mockup";
import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';


class FbService {
    constructor() {
        if (firebase.apps.length === 0) {
            firebase.initializeApp(firebaseConfig);
        }

    }
    initializePosts = () => {
        firebase.database().ref('todos').set(postMockup);
    }
    getAllTodos = async() =>{
        const res = await firebase.database().ref('todos').get();
        const data = res.toJSON();
        return Object.values(data);
    }
    getAllPost = async () => {
        const res = await firebase.database().ref('posts').get();
        const data = res.toJSON();
        return Object.values(data);
    }
    getPosts = async (startAt = 0, endAt = 5) => {
        const res = await firebase.database().ref('posts')
            .orderByKey()
            .startAt(startAt.toString())
            .endAt(endAt.toString())
            .get();
        const data = res.toJSON();
        return Object.values(data);
    }
    getTodos = async (startAt = 0, endAt = 5) => {
        const res = await firebase.database().ref('todos')
            .orderByKey()
            .startAt(startAt.toString())
            .endAt(endAt.toString())
            .get();
        const data = res.toJSON();
        return Object.values(data);
    }

    getPost = async (id) => {
        const res = await firebase.database().ref(`posts/${id}`).get();
        return res.val();
    }
    getTodo = async (id) => {
        const res = await firebase.database().ref(`todos/${id}`).get();
        return res.val();
    }


    updatePost = async (id, data) => {
        const res = await firebase.database().ref(`posts/${id}`).update(data);

    }
    updateTodo = async (id, data) => {
        const res = await firebase.database().ref(`todos/${id}`).update(data);

    }

    deletePost = async (id) => {
        const res = await firebase.database().ref(`posts/${id}`).remove();
        const posts = await this.getAllPost();

        await firebase.database().ref('posts')
            .set(posts.map((el, index) => {
                return {
                    ...el,
                    id: index
                }
            }))
    }
    deleteTodo = async (id) => {
        const res = await firebase.database().ref(`todos/${id}`).remove();
        const posts = await this.getAllTodos();

        await firebase.database().ref('todos')
            .set(posts.map((el, index) => {
                return {
                    ...el,
                    id: index
                }
            }))
    }

    createPost = async (postData) => {
        const res = await firebase.database().ref('posts').orderByKey().limitToLast(1).get();
        const lastItemJson = res.toJSON();
        const lastItem = Object.values(lastItemJson)[0];
        const { id } = lastItem;

        const newItem = {
            ...postData,
            id: id + 1,
            userId: id + 1
        }
        await firebase.database().ref(`posts/${id + 1}`).set(newItem);
        return newItem;

    }
    createTodo = async (TodoData) => {
        const res = await firebase.database().ref('todos').orderByKey().limitToLast(1).get();
        const lastItemJson = res.toJSON();
        const lastItem = Object.values(lastItemJson)[0];
        const { id } = lastItem;

        const newItem = {
            ...TodoData,
            id: id + 1,
            userId: id + 1
        }
        await firebase.database().ref(`posts/${id + 1}`).set(newItem);
        return newItem;

    }
    fromResToUser = (res) => {
        const {uid, email, displayName, photoURL} = res.user;
        return {uid, email, displayName, photoURL};
    }
    signup = async (credentials) =>{
       const res = await firebase.auth().createUserWithEmailAndPassword(credentials.email,credentials.password);
       const user= firebase.auth().currentUser;
       await user.updateProfile({
           displayName: credentials.displayName
       })

       return this.fromResToUser(res);
    }
    login = async (credentials) =>{
        const res = await firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
        return this.fromResToUser(res);
    }
    logout = async()=>{
        await firebase.auth().signOut();
    }

}

const fbService = new FbService();
export default fbService;