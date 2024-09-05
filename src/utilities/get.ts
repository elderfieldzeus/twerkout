import { WorkoutDay } from "../pages/Workout/Session";
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
import { Exercise } from "./post";

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

export async function subscribeToWorkout(
  userId: string,
  callback: (workout: WorkoutDay) => void
) {
  try {
    const q = query(
      collection(database, "workouts"),
      where("userId", "==", userId),
      where("isActive", "==", true),
      limit(1)
    );

    onSnapshot(
      q,
      (snapshot) => {
        const workouts: WorkoutDay[] = [];

        snapshot.forEach((doc) => {
          workouts.push({
            id: doc.id as string,
            name: doc.data().name as string,
            exercises: doc.data().exercises as Exercise[],
            splitId: doc.data().splitId as string,
            dayIndex: doc.data().dayIndex as number
          });
        });
  
        callback(workouts[0]);
      },
      (error) => {
        console.error("Error getting workout:", error);
      },
    );
  } catch (e) {
    console.error(e);
  }
}