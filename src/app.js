import React, { useCallback, useState } from 'react';
import List from "./components/list";
import Controls from "./components/controls";
import Basket from "./components/basket";
import Head from "./components/head";
import PageLayout from "./components/page-layout";
import Modal from './components/modal';

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
  const count = store.getCount()

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
    <>
      <PageLayout>
        <Head title='Магазин' />
        <Modal show={show} onShow={callbacks.onShow} title={"Корзина"}>
          <Basket totalPrice={totalPrice} basket={basket} onShow={callbacks.onShow} onHandleBasket={callbacks.onDeleteItem}></Basket>
        </Modal>
        <Controls totalPrice={totalPrice} basket={basket} onShow={callbacks.onShow} count={count} />
        <List list={list}
          onHandleBasket={callbacks.onAddBasket}
          onSelectItem={callbacks.onSelectItem}
          buttonText='Добавить' />
      </PageLayout>
    </>
  );
}

export default App;
