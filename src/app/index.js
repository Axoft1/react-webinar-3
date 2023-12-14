import { Routes, Route } from "react-router-dom";
import useSelector from "../hooks/use-selector";
import Main from "./main";
import Basket from "./basket";
import Article from "./article";
import Root from "./root";
import Auth from "./auth";
import ProfileForm from "./profile-form";

/**
 * Приложение
 * Маршрутизация по страницам и модалкам
 */
function App() {

  const activeModal = useSelector(state => state.modals.name);

  return (
    <>
      <Routes>
        <Route path={''} element={<Root />}>
          <Route index element={<Main />} />
          <Route path={'/auth'} element={<Auth />} />
          <Route path={'/profile'} element={<ProfileForm />} />
          <Route path={'/articles/:id'} element={<Article />} />
        </Route>
      </Routes>

      {activeModal === 'basket' && <Basket/>}
    </>
  );
}

export default App;
