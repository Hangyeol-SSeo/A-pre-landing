import React from 'react';

import './style.css'

function Second() {
    return (
        <div className='h-screen'>
            <header className='my-20'>
                <h1 className='custom-text-white'>당신의 실력에 맞는 매치,<br/>공정한 경기를 즐겨보세요.</h1>
            </header>
            <main className='mb-32'>
                <div className='relative'>
                    <div className='h-60'></div>
                    <svg className='inner-place top-1/2' width="273" height="273" viewBox="0 0 273 273" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="136.5" cy="136.5" r="136.5" fill="white"/>
                    </svg>
                    <img className='inner-place top-1/2' src='/images/image_removebg_preview_12.png' alt='img' />
                </div>
            </main>
            <footer>
                <p className='custom-text-white'>대한축구협회공인 심판이<br/>보장하는 정확한 판정을<br/>팀 당 45000원 (인당 3000원)의<br/>합리적인 가격으로 누려보세요.</p>
            </footer>
        </div>
    );
}

export default Second;