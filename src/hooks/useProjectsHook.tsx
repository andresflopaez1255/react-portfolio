//...
import { collection } from 'firebase/firestore';
import {  useFirestore, useFirestoreCollectionData } from 'reactfire';
//...
export default function useProjectsHook() {
    const { status, data } = useFirestoreCollectionData(collection(useFirestore(),'projects'));
  

   

  return {
    data,
    status
  }
}
