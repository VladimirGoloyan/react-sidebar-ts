import firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import "firebase/database";

import todosMockup from 'data-mockup/todos-mockup';

class fbService {
  constructor() {
    this.baseUrl = "https://react-sidebar-todo-list-default-rtdb.firebaseio.com";
    if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
  }

  pushTodos() {
    firebase.database().ref("/todos").set(todosMockup);
  }

  getAllItems = async (path) => {
    const allPosts = await firebase.database().ref(path).get();
    const data = allPosts.toJSON();
    return Object.values(data);
  };

  getItem = async (id, path) => {
    const res = await firebase.database().ref(`${path}/${id}`).get();
    return res.toJSON();
  };

  getItems = async (startAt = 0, endAt = 4, path) => {
    const res = await firebase
      .database()
      .ref(path)
      .orderByKey()
      .startAt(startAt.toString())
      .endAt(endAt.toString())
      .get();
    const data = res.toJSON();
    return Object.values(data);
  };

  updateItem = async (itemData, path) => {
    const postRef = firebase.database().ref(`${path}/${itemData.id}`);
    await postRef.update(itemData);
    const res = await postRef.get();
    return res.val();
  };

  deleteItem = async (id, path) => {
    const itemRef = firebase.database().ref(`${path}/${id}`);
    await itemRef.remove();
    const items = await this.getAllItems(path);
    firebase
      .database()
      .ref(path)
      .set(
        items.map((el, idx) => {
          return {
            ...el,
            id: idx,
          };
        })
      );
  };

  createItem = async (itemData, path) => {
    const res = await firebase
      .database()
      .ref(path)
      .orderByKey()
      .limitToLast(1)
      .get();
    const lastItemJson = res.toJSON();
    const lastItem = Object.values(lastItemJson)[0];
    const { id } = lastItem;
    console.log(id);
    const newItem = {
      ...itemData,
      id: id + 1,
    };
    await firebase
      .database()
      .ref(`${path}/${id + 1}`)
      .set(newItem);
    return newItem;
  };
}
const fbservice = new fbService();
export default fbservice;
