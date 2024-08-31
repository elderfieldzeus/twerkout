import { collection, getDocs, query, updateDoc, where } from "firebase/firestore";
import { database } from "./firebase";


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