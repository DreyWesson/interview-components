import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
    const { hours, minutes, seconds } = useMemo(
        () => ({
            hours: 1,
            minutes: 20,
            seconds: 40,
        }),
        []
    );
    const [stop, setStop] = useState(false);
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
    function actions() {
        return {
            resetTimer: () => setTime(() => [hours, minutes, seconds]),
            stopTimer: () => {
                setStop(!stop);
                setTime(() => [0, 0, 0]);
            },
            pauseTimer: () => (stop ? setStop(!stop) : setStop(!stop)),
        };
    }

    const handleTimer = () => {
        if (hrs === 0 && mins === 0 && secs === 0) {
            actions().resetTimer();
        } else if (mins === 0 && secs === 0) {
            setTime(() => [hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime(() => [hrs, mins - 1, 59]);
        } else {
            setTime(() => [hrs, mins, secs - 1]);
        }
    };
    // Todo
    // [✅] stop
    // [✅] pause / Play
    // [✅] reset

    useEffect(() => {
        const counter = stop ? "" : setInterval(() => handleTimer(), 1000);
        return () => clearInterval(counter);
    });
    return (
        <div className="App">
            <div
                style={{
                    fontSize: "8rem",
                    fontWeight: "bold",
                }}
            >
                {`${hrs < 10 ? 0 : ""}${hrs}:${mins < 10 ? 0 : ""}${mins}:${
                    secs < 10 ? 0 : ""
                }${secs}`}
            </div>
            <button className="reset" onClick={actions().resetTimer}>
                Reset
            </button>
            <button className="stop" onClick={actions().stopTimer}>
                Stop
            </button>
            <button
                className={stop ? "play" : "pause"}
                onClick={actions().pauseTimer}
            >
                {stop ? "Play" : "Pause"}
            </button>
        </div>
    );
}

export default App;
