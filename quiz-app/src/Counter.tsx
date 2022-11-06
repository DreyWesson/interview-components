import { useCallback, useEffect, useMemo, useState } from "react";
import { List } from "./List";

const data = [
    {
        question: "Which is the purpose of JavaScript?",
        answers: [
            "To style HTML Pages",
            "To add interactivity to HTML pages",
            "To perform server side scripting operations",
        ],
        correct: 1,
    },
    {
        question:
            "To insert a JavaScript into an HTML page, which tag is used?",
        answers: ["<script='java'>", "<javascript>", "<script>"],
        correct: 2,
    },
    {
        question:
            "Which of the following is correct to write “Hello World” on the web page?",
        answers: [
            "print('Hello World')",
            "document.write('Hello World')",
            "response.write('Hello World')",
        ],
        correct: 1,
    },
];

export const Counter = () => {
    const [minutes, seconds] = useMemo(() => [1, 30], []);
    const [progress, setProgress] = useState(90);
    const [[mins, secs], setTicker] = useState([minutes, seconds]);
    const [questionNum, setQuestionNum] = useState(0);
    const [question, setQuestion] = useState(data[0]);
    // const [showStyle, setShowStyle] = useState(false);
    const [scores, setScores] = useState(0);
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

    return (
        <div className="App">
            {winner ? (
                <div>Scored: {((scores / data.length) * 100).toFixed(2)}%</div>
            ) : (
                <div
                    className="progressContainer"
                    style={{
                        width: "60%",
                        margin: "0 auto",
                        height: "10px",
                        borderRadius: "15px",
                        backgroundColor: "lightgrey",
                    }}
                >
                    <div className="" style={style}></div>
                    <div className="">
                        <div className="">{question.question}</div>
                        <ul>
                            {question.answers.map((option, i) => {
                                const style =
                                    i === target
                                        ? {
                                              backgroundColor:
                                                  question.correct === target
                                                      ? "green"
                                                      : "red",
                                          }
                                        : {};
                                return (
                                    <List
                                        key={i}
                                        details={{
                                            correct: question.correct,
                                            handleClick,
                                            optionNum: i,
                                            option,
                                            style,
                                        }}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};
