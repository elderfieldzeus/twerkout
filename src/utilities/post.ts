import { addDoc, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { database } from "./firebase";
import { Split } from "../pages/NewSplit";

export async function postNote(title: string, content: string, userid: string) {
  try {
    await addDoc(collection(database, "notes"), {
      title,
      content,
      userid,
      createdAt: new Date(),
    });
    return true;
  } catch (e) {
    return false;
  }
}

export async function postSplit(split: Split, uid: string) {
  try {
    const q = query(collection(database, "split"), 
            where("isActive", "==", true),
            where("userid", "==", uid));

    const docRef = await getDocs(q);

    docRef.forEach(async (doc) => {
      await updateDoc(doc.ref, {
        isActive: false
      });
    })

    await addDoc(collection(database, "split"), {
      name: split.name,
      days: split.days,
      createdAt: new Date(),
      userid: uid,
      isActive: true
    })
    return true;
  }
  catch(e) {
    return false;
  }
}
