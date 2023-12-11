import { cn as bem } from "@bem-react/classname";
import './style.css'
import { Link } from "react-router-dom";
import useLanguage from "../../utils/useLanguage";

function Navigation() {
    const cn = bem('Navigation');
    const t = useLanguage('lg')
    return (
        <>
            <nav className={cn()}>
                <ol>
                    <li>
                        <Link className={cn('link')} to="/">{t('main')}</Link>
                    </li>
                </ol>
            </nav>
        </>
    )
}

export default Navigation
