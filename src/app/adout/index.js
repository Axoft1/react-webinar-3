import { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Head from '../../components/head';
import PageLayout from '../../components/page-layout';
import BasketTool from '../../components/basket-tool';
import useSelector from '../../store/use-selector';
import useStore from '../../store/use-store';
import AboutItem from '../../components/about-item';
import NotFound from '../not-found';

function About() {
    const { aboutId } = useParams()
    const store = useStore();

    useEffect(() => {
        store.actions.product.getProduct(aboutId);
    }, [aboutId]);

    const select = useSelector(state => ({
        product: state.product.item,
        amount: state.basket.amount,
        sum: state.basket.sum
    }));
    const callbacks = {
        // Добавление в корзину
        addToBasket: useCallback(_id => store.actions.basket.addToBasket(_id), [store]),
        // Открытие модалки корзины
        openModalBasket: useCallback(() => store.actions.modals.open('basket'), [store]),
    }
    if (!select.product){
        return <NotFound/>
    }
    return (
        <PageLayout>
            <Head title={select.product.title}></Head>
            <BasketTool onOpen={callbacks.openModalBasket} amount={select.amount}
                sum={select.sum} />
            <AboutItem product={select.product} onAdd={callbacks.addToBasket}/>
        </PageLayout>
    )
}

export default About