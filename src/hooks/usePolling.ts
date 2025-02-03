import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function usePolling(searchParam: string | null, ms: number = 600000){
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('interval ruining');
      if(!searchParam){
        console.log('no search param, refreshing data');
        router.refresh();
     }
    }, ms);

    return () => clearInterval(intervalId);
  }, [searchParam, ms]); // eslint-disable-line react-hooks/exhaustive-deps
}