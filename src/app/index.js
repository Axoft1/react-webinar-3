// import { useEffect } from 'react';

import Basket from "./basket";
// import useStore from "../store/use-store";
import useSelector from "../store/use-selector";
import AppRouter from './app-router';

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
