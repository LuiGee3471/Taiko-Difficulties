import React, { useState } from 'react';

export default function SongTip({ tips }) {
    const [show, setShow] = useState(false);
    const onClickTooltip = (e) => {
        e.stopPropagation();
        setShow(!show);
    }

    return (
        <span className="absolute top-2 right-4 w-4" onClick={onClickTooltip}>
            <img src="/images/exclamation.png" alt="경고"/>
            <Tooltip tips={tips} show={show}/>
        </span>
    )
}


function Tooltip({ tips, show }) {
    const className = "bg-white text-xs p-2 absolute w-24 right-2 top-2 border rounded border-black " + ((show) ? '' : 'hidden');

    return (
        <ul className={className}>
            <li>{tips.difference ? '개인차 심함' : null}</li>
            <li>{tips.firstPlay ? '초견주의' : null}</li>
            <li>{tips.fullCombo ? '풀콤보 어려움' : null}</li>
        </ul>
    )
}

