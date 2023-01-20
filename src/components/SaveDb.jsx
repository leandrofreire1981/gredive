import React from 'react'
import { fb } from '../firebase'
import { collection, addDoc, getFirestore } from 'firebase/firestore'

export async function SaveDb(obj){
    const fireDb = getFirestore(fb);
    try {
        const docRef = await addDoc(collection(fireDb, "users"), obj);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    return (
    <div>

</div>
  )
}