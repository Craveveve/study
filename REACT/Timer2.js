import React, {useState, useMemo, useEffect} from 'react';
import ReactDOM from 'react';

const App = () => (
    <div className="app">
        <div className="container">
            <h1 className="header">Hello</h1>
            <Timer2 deadline="December, 31, 2022" />
        </div>
    </div>
);

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const Timer2 = ({ deadline = new Date().toString() }) => {
    const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
    const [time, setTime] = useState(parsedDeadline - Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(parsedDeadline - Date.now()), 1000);
    }, []);

    return (
        <div className="timer">
            {Object.entries({
                Days: time / DAY,
                Hours: (time / HOUR) % 24,
                Minutes: (time / MINUTE) % 60,
                Seconds: (time / SECOND) % 60,
            }).map(([label, value]) => (
                <div key={label} className="col-4">
                    <div className="box">
                        <p>{`${Math.floor(value)}`.padStart(2, "0")}</p>
                        <span className="text">{label}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timer2
/*
ReactDOM.render(<App />),
document.getElementById('root');
*/