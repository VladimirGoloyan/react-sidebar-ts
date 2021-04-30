import firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import "firebase/database";

import todosMockup from "data-mockup/todos-mockup";

class fbService {
  baseUrl: string;
  constructor() {
    this.baseUrl =
      "https://react-sidebar-todo-list-default-rtdb.firebaseio.com";
    if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
  }

  pushTodos() {
    firebase.database().ref("/todos").set(todosMockup);
  }

  getAllItems = async (path: string) => {
    const allPosts = await firebase.database().ref(path).get();
    const data: Object | any = allPosts.toJSON();
    return Object.values(data);
  };

  getItem = async (id: number, path: string) => {
    const res = await firebase.database().ref(`${path}/${id}`).get();
    return res.toJSON();
  };

  updateItem = async (
    itemData: { completed?: boolean; title?: string; id?: number },
    path: string
  ) => {
    const postRef = firebase.database().ref(`${path}/${itemData.id}`);
    await postRef.update(itemData);
    const res = await postRef.get();
    return res.val();
  };

  deleteItem = async (id: number, path: string) => {
    const itemRef = firebase.database().ref(`${path}/${id}`);
    await itemRef.remove();
    const items = await this.getAllItems(path);
    firebase
      .database()
      .ref(path)
      .set(
        items.map((el: object | any, idx) => {
          return {
            ...el,
            id: idx,
          };
        })
      );
  };

  createItem = async (itemData: Object, path: string) => {
    const res = await firebase
      .database()
      .ref(path)
      .orderByKey()
      .limitToLast(1)
      .get();
    const lastItemJson: Object | any = res.toJSON();
    const lastItem: { id: number } | any = Object.values(lastItemJson)[0];
    const { id } = lastItem;
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
