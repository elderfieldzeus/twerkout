import { database } from "./firebase";
import { collection, DocumentData, getDocs, query, where } from "firebase/firestore";

export interface DocReturn {
    id: string;
    data: DocumentData;
}

export async function getNotes(userID: string): Promise<DocReturn[]> {
    const q = query(collection(database, "notes"), where("userid", "==", userID));

    const docs = await getDocs(q);
    const notes: DocReturn[] = [];

    docs.forEach((doc) => {
        notes.push({
            id: doc.id,
            data: doc.data()
        });
    });

    return notes;
}