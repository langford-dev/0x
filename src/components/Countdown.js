import React from 'react'
import DateCountdown from 'react-date-countdown-timer';

const Countdown = () => {
    return <div className="flex-center countdown">
        <DateCountdown dateTo='Mar 3 2022 12:00:00 GMT+0000 (Greenwich Mean Time)' callback={() => alert('Hello')} />
        &nbsp; <p>TO MINT</p>
    </div>
}

export default Countdown