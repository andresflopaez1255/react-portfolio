import { collection } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";

export default function useTimelineHook() {
  const { status, data } = useFirestoreCollectionData(
    collection(useFirestore(), "work-expierence")
  );

  if(status !== 'success') return 
  const cleanData = data.map(({ NO_ID_FIELD, ...rest }) => rest);

  function getEndDate(title: string): number {
    const match = title.match(/(\d{2})\/(\d{4})\s*-\s*(\d{2})\/(\d{4})/);
    if (!match) return 0; // si no hay coincidencia, devolver 0 (muy antiguo)
    const [, , , month, year] = match;
    return new Date(`${year}-${month}-01`).getTime(); // devolvemos número
  }

  // ordenar de más reciente a más antiguo
  const sortedData = [...cleanData].sort(
    (a, b) => getEndDate(b.title) - getEndDate(a.title)
  );

  return {
    data: sortedData,
    status,
  };
}
