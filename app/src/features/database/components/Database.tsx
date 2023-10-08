import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { UserType } from "../../../components/Type";

// ユーザー
// ユーザー作成
export const createUser = async (
  id: string,
  name: string | null = null,
  photoUrl: string | null = null,
  callback: () => void
) => {
  try {
    const docSnap = await getDoc(doc(db, "users", id))
    if(!docSnap.exists()){
      console.log("crateUser: ", docSnap.data())
      await setDoc(doc(db, "users", id), {
        id: id,
        name: name,
        photoURL: photoUrl,
        created_at: serverTimestamp(),
        groupes: [],
      });  
    }
    callback();
  } catch (error) {
    console.log(error);
  }
};

// 指定したIDのユーザー情報を取得
export const getUser = async (id: string) => {
  try {
    const docSnap = await getDoc(doc(db, "users", id));
    if(docSnap.exists()){
      console.log(docSnap.data())
      return docSnap.data() as UserType
    }else{
      console.log("No such document")
    }  
  } catch (error){
    console.log("getUser: ", error);
  }

  return null
};
