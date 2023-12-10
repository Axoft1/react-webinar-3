import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../../route-config"
import Basket from "../basket";
import useSelector from "../../store/use-selector";

function AppRouter() {
    const activeModal = useSelector(state => state.modals.name);
    return (
        <>
            <Routes>
                {Object.values(routeConfig).map(({ path, element, children }) => (
                    <Route key={path} path={path} element={element} children={children} />
                ))}
            </Routes>
            {activeModal === 'basket' && <Basket />}
        </>
    )
}

export default AppRouter
