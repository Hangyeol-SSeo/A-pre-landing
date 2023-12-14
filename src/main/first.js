import React from 'react';

import './style.css'

function First() {
    return (
        <div className='h-screen'>
            <main>
                <div className='relative text-center'>
                    <svg className='block mx-auto' width="393" height="532" viewBox="0 0 393 532" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="196.5" cy="202.5" r="329.5" fill="white"/>
                    </svg>
                    <h1 className='inner-place top-1/4 custom-text-black'>좀 더 쉽게 실력이 맞는 팀과<br/>매너있는 매치를 즐길 수는 없을까?</h1>
                    <svg className='inner-place top-full' width="67" height="58" viewBox="0 0 67 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.5 58L0.15802 0.25L66.842 0.25L33.5 58Z" fill="white"/>
                    </svg>
                    <img className='my-6 inner-place top-80' src='/images/DJV_MAR_1034_02_removebg_preview.png' alt='img' />
                </div>
            </main>
            <footer>
                <p className='custom-text-white mt-28'>직접 축구팀을 운영하며<br/>경험한 불편함에서 출발했습니다.</p>
            </footer>
        </div>
    );
}

export default First;