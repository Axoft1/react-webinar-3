import React from 'react'
import './style.css'
import { cn as bem } from '@bem-react/classname';

function Pagination(props) {
    const callbacks = {
        onPage: (e) => props.onPage(e)
    }
    const cn = bem('Pagination');
    console.log(props.pages[props.pages.length-3]);
    return (
        <div className={cn()}>
            {props.skip >= 30 &&
                <>
                    <span className={cn('page', { active: props.skip === 0 })} onClick={() => callbacks.onPage(0)}>1</span>
                <span
                    className={cn('page')}
                    onClick={() => callbacks.onPage(props.skip-10)}
                >{"..."}</span>
                </>
            }
            {props.pages.map((e, i) => {
                if (e < 30 && props.skip < 30) {
                    return <span className={cn('page', { active: props.skip === e })} key={e} onClick={() => callbacks.onPage(e)}>{i + 1}</span>
                } else if (e >= 20 && e < props.pages[props.pages.length - 4]) {
                    if (e == props.skip + 10 || e == props.skip || e == props.skip - 10) {
                        return (
                            <span className={cn('page', { active: props.skip === e })} key={e} onClick={() => callbacks.onPage(e)}>{i + 1}</span>
                        )
                    }
                } else if (e >= props.pages[props.pages.length - 4]) {
                    if (e == props.skip + 10 || e == props.skip || e == props.skip - 10 || e == props.skip - 20) {
                        return (
                            <span className={cn('page', { active: props.skip === e })} key={e} onClick={() => callbacks.onPage(e)}>{i + 1}</span>
                        )
                    }
                }

            }
            )}
            {props.skip > props.pages[props.pages.length - 3] ? '' :
                <>
                    <span 
                    className={cn('page')}
                        onClick={() => callbacks.onPage(props.skip+10)}
                    >{"..."}</span>
                    <span
                        className={cn('page', { active: props.skip === props.pages[props.pages.length - 1] })}
                        onClick={() => callbacks.onPage(props.pages[props.pages.length - 1])}
                    >
                        {props.pages.length}
                    </span>
                </>
            }
        </div>
    )
}

export default Pagination