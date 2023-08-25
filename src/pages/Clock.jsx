import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date())
    setInterval(() => {setCurrentTime(new Date())}, 1000);
    

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    return (
        <div>
            <h1>Поточний час:</h1>
            <p>
                {hours < 10 ? '0' + hours : hours}:
                {minutes < 10 ? '0' + minutes : minutes}:
                {seconds < 10 ? '0' + seconds : seconds}
            </p>
        </div>
    );
}

export default Clock;
