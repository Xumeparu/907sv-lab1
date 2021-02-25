import React, { useState, useEffect } from 'react';

export default function Timer({ delay }) {
    const [time, setTime] = useState(delay);

    useEffect(() => {
        let remainingTime = time;
        let timerId = 0;

        if (time) {
            timerId = setInterval(() => {
                if (remainingTime > 0) {
                    remainingTime--;
                    setTime(remainingTime);
                }
            }, 1000);
        }
        return () => {
            clearInterval(timerId);
        };
    }, []);

    return <span>{time}</span>;
}
