import { collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { database } from "./firebase";
import { WorkoutDay } from "../pages/Workout/Session";


export async function updateWorkoutStatus(
    userId: string,
    splitId: string
) {
    try {
        const q = query(collection(database, "workouts"),
                    where("userId", "==", userId),
                    where("splitId", "==", splitId)
                );

        const docRef = await getDocs(q);

        docRef.forEach(async (doc) => {
            await updateDoc(doc.ref, {
                isActive: false
            });
        });        
    }
    catch(e) {
        console.log(e);
    }
}

export async function saveExercise(workouts: WorkoutDay, userId: string) {
    try {
        workouts.exercises.forEach((e) => {
            e.sets.forEach((s) => {
                s.reps = Number(s.reps);
                s.weightKG = Number(s.weightKG);
            })
        });

        const q = query(collection(database, "workouts"),
                where("userId", "==", userId),
                where("isActive", "==", true));
        
        const docRef = await getDocs(q);

        docRef.forEach(async (doc) => {
            await updateDoc(doc.ref, {
                exercises: workouts.exercises
            });
        })
    }
    catch(e) {
        console.log(e);
    }
}