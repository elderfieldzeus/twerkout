import { database } from "./firebase";
import { collection, doc, getDoc, DocumentData, onSnapshot, query, where } from "firebase/firestore";

export interface DocReturn {
    id: string;
    data: DocumentData;
}

export function subscribeToNotes(userID: string, callback: (notes: DocReturn[]) => void) {
    const q = query(collection(database, "notes"), where("userid", "==", userID));

    onSnapshot(q, (snapshot) => {
        const notes: DocReturn[] = [];
        snapshot.forEach((doc) => {
            notes.push({
                id: doc.id,
                data: doc.data()
            });
        });

        notes.sort((a, b) => {
            return a.data.createdAt < b.data.createdAt ? 1 : -1;
        });

        callback(notes);
    }, (error) => {
        console.error("Error getting notes:", error);
    });
}

export async function getNote(docID: string): Promise<DocReturn | null> {
    try {
        const docRef = doc(database, "notes", docID);

        const docSnap = await getDoc(docRef);

        if(docSnap.exists()) {
            return {
                id: docSnap.id,
                data: docSnap.data()
            }
        }

        return null;
    }
    catch(e) {
        return null;
    }
}