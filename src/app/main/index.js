import { memo, useCallback, useEffect, useState } from 'react';
import Item from "../../components/item";
import PageLayout from "../../components/page-layout";
import Head from "../../components/head";
import BasketTool from "../../components/basket-tool";
import List from "../../components/list";
import useStore from "../../store/use-store";
import useSelector from "../../store/use-selector";
import usePagination from '../../store/use-paination';
import Pagination from '../../components/pagination';

function Main() {

  const [limit, setLimit] = useState(10)
  const [skip, setSkip] = useState(0)

  const store = useStore();
  const pages = usePagination();

  const select = useSelector(state => ({
    list: state.catalog.list,
    count: state.catalog.count,
    amount: state.basket.amount,
    sum: state.basket.sum,
    lg: state.languages.translation,
  }));

  useEffect(() => {
    store.actions.catalog.load(limit, skip);
  }, [skip]);

  const callbacks = {
    // Добавление в корзину
    addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
    // Открытие модалки корзины
    openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    // Получить страницу
    getPage: useCallback((e) => setSkip(e), [skip]),    
  }

  const renders = {
    item: useCallback((item) => {
      return <Item item={item} onAdd={callbacks.addToBasket} />
    }, [callbacks.addToBasket]),
  };

  return (
    <PageLayout>

      <Head title={`${select.lg.shop}`}/>
      
      <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount}
        sum={select.sum} />
      <List list={select.list} renderItem={renders.item} />
      <Pagination pages={pages} onPage={callbacks.getPage} skip={skip} />
    </PageLayout>

  );
}

export default memo(Main);
