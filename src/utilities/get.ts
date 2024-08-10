import { database } from "./firebase";
import { collection, DocumentData, onSnapshot, query, where } from "firebase/firestore";

export interface DocReturn {
    id: string;
    data: DocumentData;
}

export function subscribeToNotes(userID: string, callback: (notes: DocReturn[]) => void) {
    const q = query(collection(database, "notes"), where("userid", "==", userID));

    // Subscribe to the query
    onSnapshot(q, (snapshot) => {
        const notes: DocReturn[] = [];
        snapshot.forEach((doc) => {
            notes.push({
                id: doc.id,
                data: doc.data()
            });
        });

        callback(notes);
    }, (error) => {
        console.error("Error getting notes:", error);
    });
}