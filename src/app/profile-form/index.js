import useSelector from "../../hooks/use-selector";
import useTranslate from "../../hooks/use-translate";
import LocaleSelect from "../../containers/locale-select";
import Head from "../../components/head";
import Navigation from "../../containers/navigation";
import Spinner from "../../components/spinner";
import UserData from "../../components/user-data";
import { Navigate } from "react-router-dom";
import { getCookie } from "../../utils";
import { memo } from 'react';

function Profile() {
    const { t } = useTranslate();
    const token = getCookie('token');

    const select = useSelector(state => ({
        token: state.user.token,
        loading: state.user.waiting,
        name: state.user.user.profile.name,
        phone: state.user.user.profile.phone,
        email: state.user.user.email,
    }));

    if (!token) {
        return <Navigate to={"/login"} />;
    }

    return (<>
        <Head title={t("title")}>
            <LocaleSelect />
        </Head>
        <Navigation />
        <Spinner active={select.loading}>
            <UserData name={<>{t("profile.name")}: <strong>{select.name}</strong></>}
                email={<>{t("profile.email")}: <strong>{select.email}</strong></>}
                phone={<>{t("profile.phone")}: <strong>{select.phone}</strong></>}
                heading={t("profile.heading")} />
        </Spinner>
    </>);
}
export default memo(Profile);