import { addDoc, collection } from "firebase/firestore";
import { database } from "./firebase";

export async function postNote(title: string, content: string, userid: string) {
    try {
        await addDoc(collection(database, "notes"), {
            title,
            content,
            userid,
            createdAt: new Date()
        });
        return true;
    }
    catch(e) {
        return false;
    }

}