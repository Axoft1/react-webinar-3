import { useCallback } from "react";
import useSelector from "../store/use-selector";

const useLanguage = (key) => {
    const select = useSelector(state => ({
        lg: state.languages.translation,
    }));
    return function t (str) {
        const translateStr = select[`${key}`][`${str}`]
        return translateStr ? translateStr : str
    }
}

export default useLanguage