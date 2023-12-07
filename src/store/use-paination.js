import useStore from "./use-store";
import { useMemo } from "react";

/**
 * Хук для выборки колличества страниц
 * @return {number[]}
 */
export default function usePagination() {
    const store = useStore();
    const arr = useMemo(() => {
        return Array.from({ length: Math.floor(store.state.catalog.count / 10) + 1 }, (v, i) => i * 10);
    }, [store.state.catalog.count])
    // const map = new Map();
    // for (let i = 1; i < arr.length; i++) {
    //     map.set(i,arr[i]);
    // }
    // console.log(map);
    return arr;
}
