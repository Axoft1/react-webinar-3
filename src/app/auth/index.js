import useTranslate from "../../hooks/use-translate";
import Head from "../../components/head";
import LocaleSelect from "../../containers/locale-select";
import Navigation from "../../containers/navigation";
import SideLayout from "../../components/side-layout";
import AuthForm from "../../containers/auth-form";
import Title from "../../components/title";
import useSelector from "../../hooks/use-selector";
import { Navigate } from "react-router-dom";
import { memo } from 'react';

function Auth() {
    const { t } = useTranslate();

    const select = useSelector(state => ({
        _id: state.user.user._id,
    }))

    if (select._id) {
        return <Navigate to={'/'} />
    }

    return (
        <>
            <Head title={t('title')}>
                <LocaleSelect />
            </Head>
            <Navigation />
            <SideLayout padding={'medium'}>
                <Title text={t("user.enter")} variant={'h2'} />
            </SideLayout>
            <AuthForm />
        </>
    )
}

export default memo(Auth);