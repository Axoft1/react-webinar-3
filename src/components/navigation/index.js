import { cn as bem } from "@bem-react/classname";
import './style.css'
import useSelector from "../../store/use-selector";
import { Link } from "react-router-dom";

function Navigation() {
    const cn = bem('Navigation');
    const select = useSelector(state => ({
        lg: state.languages.translation,
    }));
    return (
        <>
            <nav className={cn()}>
                <ol>
                    <li>
                        <Link className={cn('link')} to="/">{`${select.lg.main}`}</Link>
                    </li>
                </ol>
            </nav>
        </>
    )
}

export default Navigation
