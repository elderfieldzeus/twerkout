import { addDoc, collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { database } from "./firebase";
import { Day, Split } from "../pages/Split/NewSplit";

export async function postNote(title: string, content: string, userId: string) {
  try {
    await addDoc(collection(database, "notes"), {
      title,
      content,
      userId,
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
            where("userId", "==", uid));

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
      userId: uid,
      isActive: true
    });
    
    return true;
  }
  catch(e) {
    return false;
  }
}

export interface Exercise {
  name: string,
  sets: Set[];
}

export interface Set {
  reps: string | number, // For Decimals
  weightKG: string | number// For Decimals
}

export async function postWorkout(day: Day, splitId: string, userId: string, dayIndex: number) {
  try {
    const q = query(collection(database, "workouts"),
              where("userId", "==", userId),
              where("isActive", "==", true));

    const docRef = await getDocs(q);

    docRef.forEach(async (doc) => {
      await updateDoc(doc.ref, {
        isActive: false
      });
    })

    const exercises: Exercise[] = [];

    day.exercises.forEach(exercise => {
      exercises.push({
        name: exercise,
        sets: []
      });
    })

    await addDoc(collection(database, "workouts"), {
      name: day.name,
      exercises,
      splitId,
      dayIndex,
      date: new Date(),
      userId,
      isActive: true
    });

    return true;
  }
  catch(e) {
    console.log(e);
    return false;
  }
}