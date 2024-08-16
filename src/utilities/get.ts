import { database } from "./firebase";
import {
  collection,
  DocumentData,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";

export interface DocReturn {
  id: string;
  data: DocumentData;
}

export function subscribeToNotes(
  userID: string,
  callback: (notes: DocReturn[]) => void,
) {
  const q = query(collection(database, "notes"), where("userid", "==", userID));

  onSnapshot(
    q,
    (snapshot) => {
      const notes: DocReturn[] = [];
      snapshot.forEach((doc) => {
        notes.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      notes.sort((a, b) => {
        return a.data.createdAt < b.data.createdAt ? 1 : -1;
      });

      callback(notes);
    },
    (error) => {
      console.error("Error getting notes:", error);
    },
  );
}

export async function getCurrentSplit(
  userID: string,
): Promise<DocReturn[] | null> {
  try {
    const q = query(
      collection(database, "split"),
      where("userid", "==", userID),
      where("isActive", "==", "true"),
      orderBy("createdAt", "desc"),
      limit(1),
    );

    const docs = await getDocs(q);
    const docReturn: DocReturn[] = [];

    docs.forEach((doc) => {
      docReturn.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    return docReturn;
  } catch (e) {
    console.error(e);
    return null;
  }
}
