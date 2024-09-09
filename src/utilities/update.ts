import { collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { database } from "./firebase";
import { WorkoutDay } from "../pages/Workout/Session";
import { Exercise } from "./post";


export async function updateWorkoutStatus(
    workoutId: string,
    exercises: Exercise[]
) {
    try {
        const docRef = doc(database, "workouts", workoutId);
        const docSnap = await getDoc(docRef);

        const finalExercises = exercises.filter((e) => e.sets.length !== 0);
        console.log(finalExercises);

        await updateDoc(docSnap.ref, {
            exercises: finalExercises,
            isActive: false
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

export async function addExercise(exerciseName: string, workoutId: string, exercises: Exercise[]) {
    try {
        const docRef = doc(database, "workouts", workoutId);

        const docSnap = await getDoc(docRef);

        exercises.push({
            name: exerciseName,
            sets: []
        });

        await updateDoc(docSnap.ref, {
            exercises
        });
    }
    catch(e) {
        console.error(e);
    }
}