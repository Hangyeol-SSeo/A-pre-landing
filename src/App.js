import './App.css';
import {useState, useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import First from "./main/first";
import Second from "./main/second";
import Third from "./main/third";
import Door from "./main/door";

const SERVER_URL = 'http://www.apromatch.com:8080';

function App() {
    AOS.init();

    const [isActive, setIsActive] = useState(false);

    const toggleLog = async () => {
        setIsActive(!isActive);

        const response = await fetch(SERVER_URL+'/log', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            console.log('ok');
        } else {
            console.log('error');
        }
    };

    const toggleEmail = async (event) => {
        setIsActive(!isActive);

        event.preventDefault();
        const email = event.target.email.value;
        const response = await fetch(SERVER_URL+'/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });
        // 서버로부터의 응답 처리
        if (response.ok) {
            alert('이메일을 입력했습니다!');
        } else {
            alert('이메일 입력 실패');
        }
    };

    // 전체 로그
    const sendLogToServer = async () => {
        const userData = {
            browserInfo: navigator.userAgent,
            accessTime: new Date().toISOString()
        };

        try {
            const response = await fetch(SERVER_URL+'/access', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                throw new Error('Log data could not be sent');
            }
        } catch (error) {
            console.error('Error sending log data', error);
        }
    };

    useEffect(() => {
        sendLogToServer();
    }, []);


    return (
        <div>
            {!isActive && <div>
                <div data-aos="fade-up"><First /></div>
                <div data-aos="fade-up"><Second /></div>
                <div data-aos="fade-up"><Third onToggle={toggleLog}/></div>
                <div className='h-20'></div>
            </div> }
            {isActive && <div data-aos="zoom-in-up"><Door onToggle={toggleEmail}/></div>}
        </div>
  );
}

export default App;
