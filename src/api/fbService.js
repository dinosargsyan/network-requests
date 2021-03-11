import postMockup from "data-mockup/posts.mockup";
import firebase from "firebase/app";
import 'firebase/database';
import firebaseConfig from './firebaseConfig';


class FbService {
    constructor(){
        if(firebase.apps.length === 0){
            firebase.initializeApp(firebaseConfig);
        }

        }
        initializePosts = () =>{
            firebase.database().ref('posts').set(postMockup);
        }
        getAllPost = async () =>{
            const res = await firebase.database().ref('posts').get();
            return res.val();
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

        getPost = async (id) => {
            const res = await firebase.database().ref(`posts/${id}`).get();
            return res.val();
        }

        updatePost = async(id, data) => {
          const res = await firebase.database().ref(`posts/${id}`).update(data);
          
        }

        deletePost = async(id) =>{
            const res = await firebase.database().ref(`posts/${id}`).remove();
        }

        createPost =  async (postData) =>{
            const res = await firebase.database().ref('posts').orderByKey().limitToLast(1).get();
            const lastItem = res.val();
            const { id } = lastItem;

            const newItem ={
                ...postData,
                id: id+1,
                userId: id+1
            }

            await firebase.database().ref(`posts/${id + 1}`).set(newItem);

            return newItem;

        }

}

const fbService = new FbService();
export default fbService;