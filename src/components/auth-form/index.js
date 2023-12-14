import { memo, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import Input from "../input";

function AuthForm({ onLogin, errorMessage }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(login, password);
        setLogin("");
        setPassword("");
    };

    return (
        <form onSubmit={handleSubmit} className="AuthForm">
            <h3 className="AuthForm-title">Вход</h3>
            <label className="AuthForm-label">Логин</label>
            <Input type="text" delay={0} value={login} onChange={setLogin} />
            <label className="AuthForm-label">Пароль</label>
            <Input
                type="password"
                delay={0}
                value={password}
                onChange={setPassword}
            />
            {errorMessage && <span className="AuthForm-error">{errorMessage}</span>}
            <button className="AuthForm-button" type="submit">
                Войти
            </button>
        </form>
    );
}

AuthForm.propTypes = {
    onLogin: PropTypes.func,
    errorMessage: PropTypes.string,
};

AuthForm.defaultProps = {
    onLogin: () => { },
};

export default memo(AuthForm);