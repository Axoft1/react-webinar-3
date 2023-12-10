import Main from "./main";
import AppRouter from './app-router'; 
import useSelector from "../store/use-selector";
import Basket from "./basket";
/**
 * Приложение
 * @returns {React.ReactElement}
 */
function App() {
  const activeModal = useSelector(state => state.modals.name);

  return (
    <>
      <AppRouter />
      {activeModal === 'basket' && <Basket />}
    </>

  );
}

export default App;
