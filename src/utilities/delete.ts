import { deleteDoc, doc } from "firebase/firestore";
import { database } from "./firebase";

export async function deleteNote(noteID: string) {
  try {
    const docRef = doc(database, "notes", noteID);

    await deleteDoc(docRef);
  } catch (e) {
    console.error(e);
  }
}
