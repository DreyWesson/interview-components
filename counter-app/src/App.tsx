import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
    const { hours, minutes, seconds } = useMemo(
        () => ({
            hours: 0,
            minutes: 20,
            seconds: 40,
        }),
        []
    ); // DEFAULT
    const [[hrs, mins, secs], setTime] = useState<number[]>([
        hours,
        minutes,
        seconds,
    ]); // DISPLAY
    const [stop, setStop] = useState(false);
    const actions = useMemo(
        () => ({
            resetTimer: () => setTime(() => [hours, minutes, seconds]),
            stopTimer: () => {
                setStop(!stop);
                setTime(() => [0, 0, 0]);
            },
            pauseTimer: () => setStop(!stop),
        }),
        [hours, minutes, seconds, stop]
    ); // CLOCK ACTIONS - reset, stop, pause
    const handleTimer = useCallback(() => {
        if (hrs === 0 && mins === 0 && secs === 0) actions.stopTimer();
        else if (mins === 0 && secs === 0) setTime(() => [hrs - 1, 59, 59]);
        else if (secs === 0) setTime(() => [hrs, mins - 1, 59]);
        else setTime(() => [hrs, mins, secs - 1]);
    }, [actions, hrs, mins, secs]); // handle 59 -> 00 transition for hr, min and sec

    const customizedTime = useCallback<any>(() => {
        const t = prompt("Set time using this format hr:mm:ss?");
        if (!t) return;
        if (t[2] !== ":" && t[5] !== ":") {
            const prompter = "This is not a valid time format. Use default?";
            if (!window.confirm(prompter)) customizedTime();
            return;
        }
        const newTime = t?.split(":");
        const val = newTime?.reduce(
            (prev: number[], curr: string): number[] => {
                prev.push(+curr);
                return prev;
            },
            []
        );
        setTime(() => (val?.length ? val : [hours, minutes, seconds]));
    }, [hours, minutes, seconds]);

    useEffect(() => customizedTime(), [customizedTime]);

    useEffect(() => {
        const counter = stop ? "" : setInterval(() => handleTimer(), 1000);
        return () => clearInterval(counter);
    }, [handleTimer, stop]); // handle ticking

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
            <button className="reset" onClick={actions.resetTimer}>
                Reset
            </button>
            <button
                className="stop"
                onClick={actions.stopTimer}
                disabled={stop}
            >
                Stop
            </button>
            <button
                className={stop ? "play" : "pause"}
                onClick={actions.pauseTimer}
            >
                {stop ? "Play" : "Pause"}
            </button>
        </div>
    );
}

export default App;
