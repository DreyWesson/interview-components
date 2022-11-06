type ListProps = {
    details: {
        correct: number;
        handleClick: (i: number) => void;
        optionNum: number;
        option: string;
        style: {};
        // target: number | null;
    };
};
export const List = ({
    details: { correct, handleClick, optionNum, option, style },
}: ListProps) => {
    // isClicked show the style of the clicked
    // const style =
    //     optionNum === target
    //         ? { backgroundColor: correct === target ? "green" : "red" }
    //         : {};
    return (
        <li style={style} onClick={() => handleClick(optionNum)}>
            {option}
        </li>
    );
};
