import { Link } from "react-router-dom";
import { cn as bem } from '@bem-react/classname';

function NotFound () {
    const cn = bem('BasketTool');
    return (
        <div className={cn()} style={{display:'flex', justifyContent: "center", alignItems: "center", height: "100vh", gap:'20px', backgroundColor:"white"}}>
            <div>NotFound</div> 
            <Link className={cn('link')} to="/">Главная</Link>
    </div>
    )
}

export default NotFound