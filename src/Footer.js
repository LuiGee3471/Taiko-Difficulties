import React from 'react';

export default function Footer() {
    const onClickTop = (e) => {
        document.documentElement.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
        <footer 
            className="fixed w-full h-10 bottom-0 flex items-center bg-white z-50"
        >
            <span className="text-xs block ml-5">
                데이터 출처:&nbsp;
                <a href="https://gall.dcinside.com/mgallery/board/view?id=taiko&no=35698"
                    className="underline"
                >
                    디시인사이드 태고의 달인 마이너 갤러리
                </a>
            </span>
            <button
                className="ml-auto pr-3 pl-1"
                onClick={onClickTop}
            >
                TOP
            </button>
        </footer>
    )
}