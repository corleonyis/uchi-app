import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { GroupItemType, UserType } from "../../../components/Type";

// ユーザー
// ユーザー作成
export const createUser = async (
  id: string,
  name: string | null = null,
  photoUrl: string | null = null,
  callback: () => void
) => {
  try {
    const docSnap = await getDoc(doc(db, "users", id));
    if (!docSnap.exists()) {
      console.log("crateUser: ", docSnap.data());
      await setDoc(doc(db, "users", id), {
        id: id,
        name: name,
        photoURL: photoUrl,
        created_at: serverTimestamp(),
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
    if (docSnap.exists()) {
      console.log(docSnap.data());
      return docSnap.data() as UserType;
    } else {
      console.log("No such document");
    }
  } catch (error) {
    console.log("getUser: ", error);
  }

  return null;
};

// グループ作成
export const createGroup = async (
  name: string,
  owner_id: string | undefined,
  owner_name: string | null | undefined
) => {
  try {
    await addDoc(collection(db, "groups"), {
      name: name,
      created_at: serverTimestamp(),
      owner: { id: owner_id, name: owner_name },
      members: [{ id: owner_id, name: owner_name }],
    });
  } catch (error) {
    console.log("createGroup: ", error);
  }
};

export const getGroups = async (userId: string, userName: string) => {
  return (
    await getDocs(
      query(
        collection(db, "groups"),
        where("members", "array-contains", { id: userId, name: userName })
      )
    )
  ).docs.map((doc) => doc.data()) as GroupItemType[];
};
