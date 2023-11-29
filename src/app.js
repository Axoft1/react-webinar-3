import React, { useCallback, useState } from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Basket from "./components/basket";
import Head from "./components/head";
import PageLayout from "./components/page-layout";

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const [show, setShow] = useState(false)
  const list = store.getState().list;
  const basket = store.getState().basket;
  const totalPrice = store.getPrice()

  const callbacks = {
    onDeleteItem: useCallback((code) => {
      store.deleteItem(code);
    }, [store]),

    onSelectItem: useCallback((code) => {
      store.selectItem(code);
    }, [store]),

    onAddItem: useCallback(() => {
      store.addItem();
    }, [store]),

    onAddBasket: useCallback((item) => {
      store.addBasket(item)
    }, [store]),
    onShow: useCallback(() => {
      setShow(show => !show)
    }, [store])
  }

  return (
    <PageLayout>
      <Head title='Магазин' />
      {show && 
        <Basket totalPrice={totalPrice} basket={basket} onShow={callbacks.onShow} onDeleteItem={callbacks.onDeleteItem}>DIV</Basket>
      }
      <Controls totalPrice={totalPrice} basket={basket} onShow={callbacks.onShow} />
      <List list={list}
        onAddBasket={callbacks.onAddBasket}
        onSelectItem={callbacks.onSelectItem} />
    </PageLayout>
  );
}

export default App;
