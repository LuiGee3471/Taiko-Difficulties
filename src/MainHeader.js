import React from 'react';

export default function MainHeader({ onClickMenu }) {
    return (
        <div className="h-12 flex justify-between px-4 items-center">
            <span className="h-full w-full flex items-center">
                <img src="/taiko-logo.png" alt="태고의 달인" className="h-8 mr-2" />
                <span className="text-white">난이도 서열표</span>
            </span>

            <button onClick={onClickMenu}>
                <svg className="fill-current text-white"
                    fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" /></svg>
            </button>
        </div>
    )
}
