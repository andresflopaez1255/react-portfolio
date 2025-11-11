import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useFirestore, useFirestoreCollectionData } from "reactfire";

type Language = "es" | "en";

export type WorkExperience = {
  title: string;
  cardTitle: string;
  cardSubtitle?: string;
  cardDetailedText?: string;
};

export default function useTimelineHook(language: Language) {

  const { status, data } = useFirestoreCollectionData(
    collection(useFirestore(), "work-expierence")
  );

  const [sortedData, setSortedData] = useState<WorkExperience[]>([]);
  

  useEffect(() => {
    if (!data) return;

   
    const cleanData = data.map(({ NO_ID_FIELD, ...item }: any) => {
      const translateField = (field: any) => {
        if (!field) return "";

        if (field.hasOwnProperty("es") || field.hasOwnProperty("en")) {
         console.log(field[language])
          return field[language];
        }
        return String(field);
      };

      return {
        title: translateField(item.title),
        cardTitle: translateField(item.cardTitle),
        cardSubtitle: translateField(item.cardSubtitle),
        cardDetailedText: translateField(item.cardDetailedText),
      };
    });

    function getEndDate(title: string): number {
      const match = title.match(/(\d{2})\/(\d{4})\s*-\s*(\d{2})\/(\d{4})/);
      if (!match) return 0;
      const [, , , month, year] = match;
      return new Date(`${year}-${month}-01`).getTime();
    }

    const sorted = [...cleanData].sort(
      (a, b) => getEndDate(b.title) - getEndDate(a.title)
    );

    setSortedData(sorted);
  }, [data,language]);

  return { data: sortedData, status };
}
