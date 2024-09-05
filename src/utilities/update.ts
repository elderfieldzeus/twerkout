import { collection, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { database } from "./firebase";
import { Exercise } from "./post";


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

export async function addExerciseSet(
    workoutId: string,
    index: number
) {
    try {
        const d = doc(database, "workouts", workoutId);

        const docRef = await getDoc(d);

        if(docRef.exists()) {
            const data = docRef.data();
            const exercises: Exercise[] = data.exercises;
            if(exercises) {
                exercises[index].sets.push({
                    reps: 0,
                    weightKG: 0
                });

                await updateDoc(docRef.ref, {
                    exercises: exercises
                });
            }
        }  
    }
    catch(e) {
        console.log(e);
    }
}