import React from 'react';

import './style.css'

function Third({onToggle}) {
    return (
        <div className='h-screen'>
            <header className='my-10'>
                <div className='flex flex-col md:flex-row items-center justify-center'>
                    <div className="benefit-ellipse my-6">
                        <span className="custom-text-white">혜택 1</span>
                    </div>
                    <div>
                        <p className='text-white text-xl font-bold text-center w-full'>심판의 평점,기록을 통해<br/>실력을 객관화 해줘요.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center'>
                    <div className="benefit-ellipse my-6">
                        <span className="custom-text-white">혜택 2</span>
                    </div>
                    <div>
                        <p className='text-white text-xl font-bold text-left w-full'>이를 통해 수준에 맞는<br/>매치를 찾을 수 있어요.</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-center'>
                    <div className="benefit-ellipse my-6">
                        <span className="custom-text-white">혜택 3</span>
                    </div>
                    <div>
                        <p className='text-white text-xl font-bold text-left w-full'>공정한 심판의 판정으로<br/>경기가 과열되지 않아요.</p>
                    </div>
                </div>
            </header>
            <main className='p-8 text-center'>
                <svg className='block mx-auto' width="254" height="279" viewBox="0 0 254 279" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.7468 214.5L127 27L235.253 214.5H18.7468Z" fill="#B6DAFF" stroke="white" stroke-width="2"/>
                    <line x1="45" y1="168" x2="209" y2="168" stroke="white" stroke-width="2"/>
                    <path d="M72 121L182 121" stroke="white" stroke-width="2"/>
                    <line x1="101" y1="72" x2="153" y2="72" stroke="white" stroke-width="2"/>
                    <circle cx="127" cy="58" r="9" fill="#007CF8"/>
                    <circle cx="114" cy="96" r="9" fill="white"/>
                    <circle cx="141" cy="96" r="9" fill="white"/>
                    <circle cx="95" cy="144" r="9" fill="white"/>
                    <circle cx="127" cy="144" r="9" fill="white"/>
                    <circle cx="159" cy="144" r="9" fill="white"/>
                    <circle cx="95" cy="190" r="9" fill="white"/>
                    <circle cx="127" cy="190" r="9" fill="white"/>
                    <circle cx="159" cy="190" r="9" fill="white"/>
                    <circle cx="191" cy="190" r="9" fill="white"/>
                    <circle cx="63" cy="190" r="9" fill="white"/>
                    <path d="M127 2L127 16" stroke="white" stroke-width="3" stroke-linecap="round"/>
                    <path d="M139 19.7279L149 9.72791" stroke="white" stroke-width="3" stroke-linecap="round"/>
                    <path d="M105.728 9.72791L115.728 19.7279" stroke="white" stroke-width="3" stroke-linecap="round"/>
                </svg>

                <button onClick={onToggle} className='button block mx-auto my-10 hover:bg-blue-300'><span className='text-black text-xl font-bold text-center w-full'>심판을 이용해 수준에<br/>맞는 매치 찾으러 가기</span></button>
            </main>
        </div>
    );
}

export default Third;