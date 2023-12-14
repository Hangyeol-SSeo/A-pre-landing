import React from 'react';

import './style.css'

function Door({onToggle}) {
    return (
        <div className='h-screen'>
            <header>
                <div className='relative text-center'>
                    <svg className='block mx-auto' width="393" height="532" viewBox="0 0 393 532" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="196.5" cy="202.5" r="329.5" fill="white"/>
                    </svg>
                    <h1 className='inner-place top-1/4 custom-text-black'>저희 서비스에 관심을<br/>가져주셔서 감사합니다</h1>
                    <svg className='inner-place top-full' width="67" height="58" viewBox="0 0 67 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.5 58L0.15802 0.25L66.842 0.25L33.5 58Z" fill="white"/>
                    </svg>
                    <img className='my-6 inner-place top-80' src='/images/heart.png' alt='img' />
                </div>
            </header>
            <main className='my-10'>
                <p className='custom-text-white mt-28'>사실 본 서비스는 현재 제작중입니다.<br/>이메일을 입력해주시면 서비스가<br/>출시되는대로 포인트 1000점을<br/>지급해드리겠습니다.</p>
                <p className='custom-text-white mt-28'>멋진 서비스로 찾아오겠습니다!<br/>🤍 감사합니다 🤍</p>
            </main>
            <footer>
                <div className="block mx-auto p-8 rounded-lg max-w-sm w-full">
                    <form onSubmit={onToggle} id="emailForm" className="flex flex-col space-y-4">
                        <input type="email" id="email" placeholder="이메일을 입력해주세요" className="bg-blue-300 border-2 p-2 rounded-md focus:outline-none focus:border-blue-500" required/>
                        <button type="submit" className="bg-white text-black font-bold text-center p-2 rounded-md hover:bg-blue-300">확인</button>
                    </form>
                </div>
            </footer>
        </div>
    );
}

export default Door;