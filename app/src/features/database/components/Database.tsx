import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const createUser = async (
  id: string,
  name: string | null = null,
  photoUrl: string | null = null,
  callback: () => void,
) => {
  try {
      await setDoc(doc(db, "users", id), {
        id: id,
        name: name,
        photoURL: photoUrl,
        created_at: serverTimestamp(),
        groupes: [],
      });
    callback();
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (id: string) => {
  try {
    return await getDoc(doc(db, "users", id));
  } catch (error) {
    console.log(error);
  }
};
