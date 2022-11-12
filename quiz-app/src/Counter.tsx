import { List } from "./List";
import { useLogic } from "./useLogic";

export const Counter = () => {
    const { handleClick, style, winner, question, target, percentage } =
        useLogic();
    return (
        <div>
            {winner ? (
                <div>Scored: {percentage}%</div>
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
