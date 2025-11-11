import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";

type WorkExperience = {
  title: string;
  cardTitle: string;
  cardSubtitle?: string;
  cardDetailedText?: string;

};

export default function useTimelineHook() {
  const { status, data } = useFirestoreCollectionData(
    collection(useFirestore(), "work-expierence")
  );

  const [sortedData, setSortedData] = useState<WorkExperience[]>([]);

  useEffect(() => {
    if (!data) return;

    const cleanData = data.map(({ NO_ID_FIELD, ...rest }: any) => rest);

    function getEndDate(title: string): number {
      const match = title.match(/(\d{2})\/(\d{4})\s*-\s*(\d{2})\/(\d{4})/);
      if (!match) return 0;
      const [, , , month, year] = match;
      return new Date(`${year}-${month}-01`).getTime();
    }

    const sorted = [...cleanData].sort(
      (a, b) => getEndDate(b.title) - getEndDate(a.title)
    );
  
    console.log(sorted)
    setSortedData(sorted);
  }, [data, status]);

  return {
    data: sortedData,
    status,
  };
}
