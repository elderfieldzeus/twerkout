import { deleteDoc, doc } from "firebase/firestore";
import { database } from "./firebase";

export async function deleteNote(noteId: string) {
  try {
    const docRef = doc(database, "notes", noteId);

    await deleteDoc(docRef);
  } catch (e) {
    console.error(e);
  }
}

export async function deleteWorkout(workoutId: string) {
  try {
    const docRef = doc(database, "workouts", workoutId);

    await deleteDoc(docRef);
  }
  catch(e) {
    console.error(e);
  }
}
