import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  deleteDoc,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import {
  getDatabase,
  ref,
  set,
  get,
  onValue,
  update,
  remove,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAVwEO2gvLXQ38owm-z6U0oDv_WDiU5f9o",
  authDomain: "ambient-segment-350204.firebaseapp.com",
  databaseURL: "https://ambient-segment-350204-default-rtdb.firebaseio.com",
  projectId: "ambient-segment-350204",
  storageBucket: "ambient-segment-350204.appspot.com",
  messagingSenderId: "498705403056",
  appId: "1:498705403056:web:28e2effb3d6e67f6f0ff75",
  measurementId: "G-R3MYJ1BW4T",
};
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

// 取得單一資料
export const getSingleData = async (dataTable, dataName) => {
  const docRef = doc(db, dataTable, dataName);
  const getData = await getDoc(docRef);
  return getData.data();
};

// 取得多筆資料
export const getAllData = async (dataTable) => {
  const allData = await getDocs(collection(db, dataTable));
  let result = [];
  allData.forEach((item) => {
    // 顯示每筆資料的country
    result.push(item.data());
  });
  return result;
};

// 設定資料
export const setData = async (database, dataTable, data) => {
  // 若是沒有該database資料則會直接新增一個database
  const dataTableRef = collection(db, database);
  setDoc(doc(dataTableRef, dataTable), data, { merge: true });
};

//更新資料
export const updateData = async (database, dataTable, data) => {
  const docRef = doc(db, database, dataTable);
  await updateDoc(docRef, data);
  //   await updateDoc(docRef, {
  //     // 更新時間
  //     timestamp: serverTimestamp(),
  //   });
};

// 新增陣列元素(push)
export const addArrayItem = async (collection, document, arrayName, data) => {
  const docRef = doc(db, collection, document);
  // 新增多筆資料到陣列中
  await updateDoc(docRef, {
    //data只能傳入物件或是字串
    [arrayName]: arrayUnion(data),
  });
};

// 刪除陣列元素(splice)
export const delArrayItem = async (
  collection,
  document,
  arrayName,
  delData
) => {
  const docRef = doc(db, collection, document);
  // 新增多筆資料到陣列中
  await updateDoc(docRef, {
    //data只能傳入物件或是字串
    [arrayName]: arrayRemove(delData),
  });
};

// 監聽特定資料
export const monitoringData = async (database, dataTable) => {
  const docRef = doc(db, database, dataTable);
  onSnapshot(docRef, (doc) => {
    // 程式修改為Local網頁版修改為server
    const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
    console.log("當前資料", doc.data());
  });
};
