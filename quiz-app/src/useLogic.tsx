import { useCallback, useEffect, useMemo, useState } from "react";
import { data } from "./seed";

export const useLogic = () => {
    const [minutes, seconds] = useMemo(() => [1, 30], []);
    const [progress, setProgress] = useState(90);
    const [[mins, secs], setTicker] = useState([minutes, seconds]);
    const [questionNum, setQuestionNum] = useState(0);
    const [question, setQuestion] = useState(data[0]);
    const [scores, setScores] = useState(0);
    const [percentage, setPercentage] = useState((scores / data.length) * 100);
    const [winner, setWinner] = useState(false);
    const [target, setTarget] = useState<null | number>(null);

    useEffect(() => {
        setQuestion(() => data[questionNum]);
    }, [questionNum]);

    const actions = useMemo(
        () => ({
            nextQuestion: () => {
                setProgress(() => 90);
                setTicker(() => [1, 30]);
                setQuestionNum((prev) => (prev += 1));
            },
            othersQuestion: () => {},
        }),
        []
    );

    const handleTimer = useCallback(() => {
        if (mins === 0 && secs === 0) {
            actions.nextQuestion();
        } else if (secs === 0) {
            setTicker(() => [mins - 1, 59]);
        } else {
            setTicker(() => [mins, secs - 1]);
        }
    }, [actions, mins, secs]);

    const colorScheme = useCallback(() => {
        if (progress > 60) {
            return "green";
        } else if (progress <= 60 && progress >= 30) {
            return "orange";
        } else return "red";
    }, [progress]);

    const style = useMemo(
        () => ({
            width: `${((progress / 90) * 100) | 0}%`,
            background: colorScheme(),
            height: "10px",
            borderRadius: "15px",
        }),
        [progress, colorScheme]
    );

    useEffect(() => {
        const timer = setInterval(() => {
            handleTimer();
            setProgress((prev) => (prev -= 1));
        }, 1000);

        return () => clearInterval(timer);
    }, [handleTimer, scores]);

    // TODO
    // color styling
    useEffect(() => {
        setPercentage(() => +((scores / data.length) * 100).toFixed(2));
    }, [scores]);

    const handleClick = (i: number) => {
        setTarget(i);
        if (i === question.correct) setScores((prev) => (prev += 1));
        if (questionNum >= data.length - 1) {
            const tag = setTimeout(() => setWinner(true), 100);
            return () => clearTimeout(tag);
        }
        const tag = setTimeout(() => {
            actions.nextQuestion();
            setTarget(null);
        }, 100);
        return () => clearTimeout(tag);
    };
    return {
        handleClick,
        style,
        colorScheme,
        handleTimer,
        actions,
        winner,
        scores,
        question,
        target,
        percentage,
    };
};
