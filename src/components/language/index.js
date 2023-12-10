import useSelector from "../../store/use-selector";
import { useCallback } from "react";
import useStore from "../../store/use-store";
import { cn as bem } from "@bem-react/classname";
import './style.css'

function Language() {
    const cn = bem('Language');
    const select = useSelector(state => ({
        language: state.languages.language,
    }));
    const store = useStore();
    const callbacks = {
        // Переключение языка
        switchRu: useCallback(() => store.actions.languages.switchRu(), []),
        switchEn: useCallback(() => store.actions.languages.switchEn(), [])
    }
    return (
        <>
            <div className={cn()}> 
                {select.language === 'en' ? <button onClick={() => callbacks.switchRu()}>en</button> : <button onClick={() => callbacks.switchEn()}>ru</button>}
            </div>            
        </>
    )
}

export default Language
