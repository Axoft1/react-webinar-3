import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../../route-config"


function AppRouter() {
    return (        
    <Routes>
        {Object.values(routeConfig).map(({ path, element, children }) => (
            <Route key={path} path={path} element={element} children={children} />
        ))}
    </Routes>
    )
}

export default AppRouter
