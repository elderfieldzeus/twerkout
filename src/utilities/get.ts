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
  userId: string,
  callback: (notes: DocReturn[]) => void,
) {
  const q = query(collection(database, "notes"), where("userId", "==", userId));

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
  userId: string,
): Promise<DocReturn | null> {
  try {
    const q = query(
      collection(database, "split"),
      where("userId", "==", userId),
      where("isActive", "==", true),
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

    return docReturn.length == 1 ? docReturn[0] : null;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function getCurrentWorkout(
  userId: string
): Promise<DocReturn | null> {
  try {
    const q = query(
      collection(database, "workouts"),
      where("userId", "==", userId),
      where("isActive", "==", true),
      limit(1)
    );

    const docs = await getDocs(q);
    const docReturn: DocReturn[] = [];

    docs.forEach((doc) => {
      docReturn.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    return docReturn.length == 1 ? docReturn[0] : null;
  } catch (e) {
    console.error(e);
    return null;
  }
}